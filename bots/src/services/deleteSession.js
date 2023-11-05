import { $api } from "../api.js"

export const deleteSession = async (username) => new Promise(async (resolve, reject) => {
    try {
        const data = await $api.delete(`/api/dbSettins/sessions/${username}`)
        console.log(data);
        resolve(data.status)
    } catch (error) {
        reject(error)
    }
})