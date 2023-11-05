import { $api } from "../api.js"

export const getHardware = async () => new Promise(async (resolve, reject) => {
    try {
        const data = await $api.get('/api/analytics/hardware')
        resolve(data.data)
    } catch (error) {
        reject(error)
    }
})