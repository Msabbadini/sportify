import { createContext, useEffect, useCallback, useState } from "react";
import {
    IUserActivity,
    IUserPerformances,
    IUserProfile,
    IUserSession,
    PropsUserType,
    MOCKED
} from "@/state/interfaces"
import API from "@/state/api";

interface FunctionProperty {
    (message: string, value: PropsUserType): void
}

interface RoadContextInterface {
    switchMode?: string,
    profile?: IUserProfile,
    performances?: IUserPerformances,
    activities?: IUserActivity,
    sessions?: IUserSession,
    userId?: string,
    error?: string,
    setProperty: FunctionProperty,
}


const initialState: RoadContextInterface = { setProperty: (_message: string, _value: PropsUserType) => { } }
const RoadContext = createContext(initialState);

const DEFAULT_USER_ID = "18"

export const ContextProvider = ({ children }) => {
    const [userId, setUserId] = useState("12")
    const [error, setError] = useState("")

    // ********* Mode api call *********
    const [switchMode, setSwitchMode] = useState<string>(MOCKED)
    const [prevSwitchMode, setPrevSwitchMode] = useState<string>(MOCKED)
    // ********* Mode api call *********
    // ******* Info User *******
    const [profile, setProfile] = useState<IUserProfile>({
        id: DEFAULT_USER_ID,
        keyData: {
            calorieCount: 0,
            proteinCount: 0,
            carbohydrateCount: 0,
            lipidCount: 0
        },
        score: 0,
        userInfos: {
            firstName: "Karl",
            lastName: "Marxx",
            age: 666
        },
    })
    // ******* Info User *******
    // ******* User Stats ******
    const [performances, setPerformances] = useState<IUserPerformances>({
        userId: DEFAULT_USER_ID,
        kind: { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" },
        data: []
    })
    const [activities, setActivities] = useState<IUserActivity>({
        userId: DEFAULT_USER_ID,
        sessions: []
    });
    const [sessions, setSessions] = useState<IUserSession>({
        userId: DEFAULT_USER_ID,
        sessions: []
    });

    const setProperty = useCallback((message: string, value: PropsUserType) => {
        switch (message) {
            case "profile":
                setProfile(value as IUserProfile)
                break
            case "mode":
                setSwitchMode(value as string)
                break
            case "performances":
                setPerformances(value as IUserPerformances)
                break
            case "activities":
                setActivities(value as IUserActivity)
                break
            case "sessions":
                setSessions(value as IUserSession)
                break
            case "userID":
                setUserId((''+value) as string)
                break
            default:
                return
        }
    }, [setSwitchMode,
        setUserId,
        setProfile,
        setPerformances,
        setActivities,
        setSessions])

    useEffect(() => {
        API.useMockedStore = (switchMode === MOCKED)
    }, [switchMode]);

    useEffect(() => {

        const loadUser = async () => {
            const Api = API.api
            try {   
                const userProfile = await Api.getUserProfile(userId)
                setProperty("profile", userProfile);

                const performances = await Api.getUserPerformance(userId)
                setProperty("performances", performances)

                const activities = await Api.getUserActivity(userId)
                setProperty("activities", activities)

                const sessions = await Api.getUserSessions(userId)
                setProperty("sessions", sessions)
            } catch (e) {
                setError(JSON.stringify(e) as string)
            }
        }

        if (''+userId !== ''+profile.id || switchMode !== prevSwitchMode) {
            loadUser()
            setPrevSwitchMode(switchMode)
        }

    }, [switchMode, setProperty, userId, setUserId, profile, prevSwitchMode, setPrevSwitchMode])

    return (
        <RoadContext.Provider value={{
            switchMode,
            profile,
            performances,
            activities,
            sessions,
            userId,
            error,
            setProperty,
        }}>
            {children}
        </RoadContext.Provider>
    )
}

export default RoadContext
