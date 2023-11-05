import { prevArr, users } from "../index.js"
import { $api } from "../api.js"
import { client } from "../bot.js"

export const startErrorCheckWorker = () => new Promise((resolve, reject) => {
    // setTimeout(async () => {
    //     const data = await $api.get('/api/dbSettins/errors')
    //     console.log(data.data);
    //     if (data.data.length == prevArr.length) return startErrorCheckWorker()
    //     const newArr = data.data.slice(prevArr.length, data.data.length)
    //     newArr.forEach(e => {
    //         prevArr.push(e)
    //     })
    //     users.forEach(e => {
    //         newArr.forEach(err => {
    //             client.sendMessage(e, JSON.stringify(err))
    //         })
    //     })
    //     startErrorCheckWorker()
    // }, 15000)
})