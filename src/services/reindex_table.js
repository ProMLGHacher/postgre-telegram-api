import { $api } from "../api.js"

export const reindexTable = async (table) => new Promise(async (resolve, reject) => {
    try {
        const data = await $api.put('/api/dbSettins/reindex-table/' + table)
        resolve(data.status)
    } catch (error) {
        reject(error)
    }
})