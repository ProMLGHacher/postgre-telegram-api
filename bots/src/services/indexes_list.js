import { $api } from "../api.js"

export const getIndexesList = async () => new Promise(async (resolve, reject) => {
    try {
        const data = await $api.get('/api/dbSettins/indexes')
        resolve(data.data)
    } catch (error) {
        reject(error)
    }
})