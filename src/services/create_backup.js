import { $api } from "../api.js"

export const createBackUp = async () => new Promise(async (resolve, reject) => {
    try {
        const data = await $api.post('/api/dbSettins/backup')
        resolve(data)
    } catch (error) {
        reject(error)
    }
})