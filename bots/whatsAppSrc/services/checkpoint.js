import { $api } from "../api.js"

export const checkpoint = async () => new Promise(async (resolve, reject) => {
    try {
        const data = await $api.post('/api/dbSettins/checkpoint')
        resolve(data)
    } catch (error) {
        reject(error)
    }
})