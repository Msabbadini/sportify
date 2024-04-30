export interface IUserProfile {
    id: string,
    userInfos: {
        firstName: string,
        lastName: string,
        age: number,
    },
    score: number,
    keyData: {
        calorieCount: number,
        proteinCount: number,
        carbohydrateCount: number,
        lipidCount: number
    }
}

export interface IUserActivity {
    userId: string,
    sessions: Array<{
        day: string,
        kilogram: number,
        calories: number
    }>

}

export interface IUserSession {
    userId: string,
    sessions: Array<{
        day: number,
        sessionLength: number
    }>
}

export interface IPerformance {
    value: number,
    kind: string
}
export interface IBindPerformance {
    value: number,
    kind: number
}

export interface IUserPerformances {
    userId: string,
    kind: {
        1: string,
        2: string,
        3: string,
        4: string,
        5: string,
        6: string
    },
    data: Array<IBindPerformance>
}

export type PropsUserType = IUserProfile | IUserActivity | IUserSession | IUserPerformances | string | undefined
export interface IUserData {
    user: IUserProfile
    activity: IUserActivity
    averageSessions: IUserSession
    performances: IUserPerformances
}


interface ApiFuncProfile { (userId: string): Promise<IUserProfile | undefined> }
interface ApiFuncActivity { (userId: string): Promise<IUserActivity | undefined> }
interface ApiFuncSession { (userId: string): Promise<IUserSession | undefined> }
interface ApiFuncPerformance { (userId: string): Promise<IUserPerformances | undefined> }
export interface IApi {
    getUserProfile: ApiFuncProfile
    getUserActivity: ApiFuncActivity
    getUserSessions: ApiFuncSession
    getUserPerformance: ApiFuncPerformance
}

export const MOCKED = "mocked"
export const API ="api"
