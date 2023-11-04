import { prevArr, users } from "../index.js"
import { $api } from "../api.js"
import { bot } from "../bot.js"

export const startErrorCheckWorker = () => new Promise((resolve, reject) => {
    setTimeout(async () => {
        const data = await $api.get('/api/dbSettins/errors')
        console.log(data.data);
        if (data.data.length == prevArr.length) return startErrorCheckWorker()
        const newArr = data.data.slice(prevArr.length, data.data.length)
        newArr.forEach(e => {
            prevArr.push(e)
        })
        console.log(newArr);
        console.log(prevArr);
        users.forEach(e => {
            newArr.forEach(err => {
                bot.sendMessage(e, JSON.stringify(err))
            })
        })
        startErrorCheckWorker()
    }, 15000)
})