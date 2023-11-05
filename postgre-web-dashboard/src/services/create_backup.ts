import { $api } from "../api.js"

export const createBackUp = async () => new Promise<number>(async (resolve, reject) => {
    try {
        const data = await $api.post('/api/dbSettins/backup')
        resolve(data.status)
    } catch (error) {
        reject(error)
    }
})