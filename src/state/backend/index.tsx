import {IUserSession, IUserPerformances, IUserActivity, IUserProfile, IApi} from "@/state/interfaces.tsx";

const fetchFunction = async (url: string, method: string, payload?: never) => {
    const requestOptions: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
    };

    if (method === "POST" || method === "PUT") {
        requestOptions.body = JSON.stringify(payload);
    }

    return await fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error("Response was not ok");
            }
            return response.json();
        })
        .catch(e => {
            console.error(e)
        });
};

const API :IApi = {
    getUserProfile: async (userId: string) :Promise<IUserProfile|undefined> => {
        const apiUrl = `${import.meta.env.VITE_API_URL_LOCAL}/user/${userId}`
        return fetchFunction(apiUrl, "GET")
            .then(data=>{
                const v = data.data;
                if (v["todayScore"]) {
                    v.score = v["todayScore"]
                    delete v["todayScore"]
                }
                return v
            })
    },
    getUserActivity: async (userId: string) :Promise<IUserActivity|undefined> => {
        const apiUrl = `${import.meta.env.VITE_API_URL_LOCAL}/user/${userId}/activity`
        return fetchFunction(apiUrl, "GET").then(data=>data.data)
    },
    getUserSessions: async (userId: string) :Promise<IUserSession|undefined> => {
        const apiUrl = `${import.meta.env.VITE_API_URL_LOCAL}/user/${userId}/average-sessions`
        return fetchFunction(apiUrl, "GET").then(data=>data.data)
    },
    getUserPerformance: async (userId: string) :Promise<IUserPerformances|undefined> => {
        const apiUrl = `${import.meta.env.VITE_API_URL_LOCAL}/user/${userId}/performance`
        return fetchFunction(apiUrl, "GET").then(data=>data.data)
    }
}

export default API
