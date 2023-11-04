import { $api } from "../api.js"

export const getSessions = async () => new Promise(async (resolve, reject) => {
    try {
        const data = await $api.get('/api/analytics/sessions')
        resolve(data.data)
    } catch (error) {
        reject(error)
    }
})