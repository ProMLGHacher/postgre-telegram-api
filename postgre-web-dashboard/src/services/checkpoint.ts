import { $api } from "../api.js"

export const checkpoint = async () => new Promise<number>(async (resolve, reject) => {
    try {
        const data = await $api.post('/api/dbSettins/checkpoint')
        resolve(data.status)
    } catch (error) {
        reject(error)
    }
})