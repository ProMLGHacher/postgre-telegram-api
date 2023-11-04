import { $api } from "../api.js"

export const getTables = async () => new Promise(async (resolve, reject) => {
    try {
        const data = await $api.get('/api/dbSettins/tables')
        resolve(data.data)
    } catch (error) {
        reject(error)
    }
})