import { $api } from "../api.js"

export const reindexIndex = async (index) => new Promise(async (resolve, reject) => {
    try {
        const data = await $api.put('/api/dbSettins/reindex-index?index=' + index)
        resolve(data.status)
    } catch (error) {
        reject(error)
    }
})