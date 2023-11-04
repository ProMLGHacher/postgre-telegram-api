import { $api } from "../api.js"

export const getQueries = async () => new Promise(async (resolve, reject) => {
    try {
        const data = await $api.get('/api/analytics/queries')
        resolve(data.data)
    } catch (error) {
        reject(error)
    }
})