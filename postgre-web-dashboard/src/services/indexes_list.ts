import { $api } from "../api.js"



export const getIndexesList = async () => new Promise<string[]>(async (resolve, reject) => {
    try {
        const data = await $api.get<string[]>('/api/dbSettins/indexes')
        resolve(data.data)
    } catch (error) {
        reject(error)
    }
})