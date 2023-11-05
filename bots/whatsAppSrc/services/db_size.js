import { $api } from "../api.js"

export const getDbSize = async () => new Promise(async (resolve, reject) => {
    try {
        const data = await $api.get('/api/analytics/databaseInfo')
        resolve(data.data)
    } catch (error) {
        reject(error)
    }
})