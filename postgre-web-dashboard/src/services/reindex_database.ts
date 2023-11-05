import { $api } from "../api.js"

export const reindexDatabase = async () => new Promise<number>(async (resolve, reject) => {
    try {
        const data = await $api.put('/api/dbSettins/reindex-database')
        resolve(data.status)
    } catch (error) {
        reject(error)
    }
})