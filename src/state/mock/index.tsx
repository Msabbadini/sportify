import userData from './data'
import { IUserProfile, IUserSession, IUserActivity, IUserPerformances, IApi } from "@/state/interfaces";

const API: IApi = {
    getUserProfile: async (userId: string): Promise<IUserProfile | undefined> => {
        return new Promise((resolve, reject) => {
            const user = userData.USER_MAIN_DATA.find(user => ''+user.id === ''+userId)
            if (!user) reject("user not found 1 "+userId)
            resolve(user)
        })
    },
    getUserActivity: async (userId: string): Promise<IUserActivity | undefined> => {
        return new Promise((resolve, reject) => {
            const activity = userData.USER_ACTIVITY.find(user => ''+user.userId === ''+userId)
            if (!activity) reject("user not found 2 "+userId)
            resolve(activity)
        })
    },
    getUserSessions: async (userId: string): Promise<IUserSession | undefined> => {
        return new Promise((resolve, reject) => {
            const sessions = userData.USER_AVERAGE_SESSIONS.find(user => ''+user.userId === ''+userId)
            if (!sessions) reject("user not found 3 "+userId)
            resolve(sessions)
        })
    },
    getUserPerformance: async (userId: string): Promise<IUserPerformances | undefined> => {
        return new Promise((resolve, reject) => {
            const performances = userData.USER_PERFORMANCE.find(user => ''+user.userId === ''+userId)
            if (!performances) reject("user not found 4 "+userId)
            resolve(performances)
        })
    }
}

export default API;
