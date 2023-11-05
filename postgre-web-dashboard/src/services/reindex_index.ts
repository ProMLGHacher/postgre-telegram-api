import { $api } from "../api.js"

export const reindexIndex = async (index: string) => new Promise<number>(async (resolve, reject) => {
    try {
        const data = await $api.put('/api/dbSettins/reindex-index?index=' + index)
        resolve(data.status)
    } catch (error) {
        reject(error)
    }
})