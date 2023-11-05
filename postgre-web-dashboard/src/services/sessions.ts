import { $api } from "../api.js"

export type Session = {
    user_name: string,
    session_count: number,
    max_query_duration: string
}

export const getSessions = async () => new Promise<Session[]>(async (resolve, reject) => {
    try {
        const data = await $api.get<Session[]>('/api/analytics/sessions')
        resolve(data.data)
    } catch (error) {
        reject(error)
    }
})