import { prevArr, users } from "../index.js"
import { $api } from "../api.js"
import { bot } from "../bot.js"

const options = (err, sol) => {

    console.log('ПИДОР ');
    console.log([
        ...sol.map((e) => {
            return [{
                text: `${e}`,
                callback_data: `/solution ${e}`
            }]
        })
    ]);

    return {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [
                    {
                        text: 'Найти ошибку',
                        url: `https://www.google.com/search?q=${err.replaceAll('{', '').replaceAll('}', '').replaceAll('.', '').replaceAll(',', '').replaceAll('\'', '').replaceAll('"', '')}&ie=UTF-8`
                    }
                ],
                [
                    {
                        text: 'Найти ошибку',
                        url: `https://www.google.com/search?q=${err.replaceAll('{', '').replaceAll('}', '').replaceAll('.', '').replaceAll(',', '').replaceAll('\'', '').replaceAll('"', '')}&ie=UTF-8`
                    }
                ]
            ]
        })
    }
}

export const startErrorCheckWorker = () => new Promise((resolve, reject) => {
    setTimeout(async () => {
        try {
            const data = await $api.get('/api/dbSettins/errors')
            console.log(data.data);
            if (data.data.length == prevArr.length) return startErrorCheckWorker()
            const newArr = data.data.slice(prevArr.length, data.data.length)
            newArr.forEach(e => {
                prevArr.push(e)
            })
            users.forEach(e => {
                newArr.forEach(err => {
                    bot.sendMessage(e, `WARNING\nОшибка: ${err.message}\n${new Date(err.timestamp).toLocaleDateString('ru-RU')} ${new Date(err.timestamp).toLocaleTimeString('ru-RU')}`, options(err.message, err.solutions))
                })
            })
            startErrorCheckWorker()
        } catch (error) {
            console.log(error);
            startErrorCheckWorker()
        }
    }, 15000)
})