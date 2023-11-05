import { $api } from "../api.js"

export const getTables = async () => new Promise<string[]>(async (resolve, reject) => {
    try {
        const data = await $api.get<string[]>('/api/dbSettins/tables')
        resolve(data.data)
    } catch (error) {
        reject(error)
    }
})