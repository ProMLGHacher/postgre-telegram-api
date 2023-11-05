import { $api } from "../api.js"

export type Query = {
    queryText: string,
    queryCount: number,
    maxQueryDuration: string
}

export const getQueries = async () => new Promise<Query[]>(async (resolve, reject) => {
    try {
        const data = await $api.get<Query[]>('/api/analytics/queries')
        resolve(data.data)
    } catch (error) {
        reject(error)
    }
})