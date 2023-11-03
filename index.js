import TelegramBot from "node-telegram-bot-api"
import { $api } from "./api.js"

const token = '6559198159:AAGc51JszySdnxVvz183MJMg66vdhxhfCUk'

const bot = new TelegramBot(token, { polling: true })

bot.setMyCommands([
    {
        command: '/start',
        description: 'Начать работать'
    },
    {
        command: '/get_info',
        description: 'get server info'
    },
    {
        command: '/checkpoint',
        description: 'Выполнить команду checkpoint и перезапускает базу'
    }
])

const options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '1', callback_data: '1' }, { text: '2', callback_data: '2' }]
        ]
    })
}

const start = () => {
    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id
        if (text === '/start') {
            return bot.sendMessage(chatId, 'Привет!')
        }
        if (text === '/get_info') {
            const data = await $api.get('/api/analytics')
            console.log(data.data.length);
            data.data.forEach(element => {
                bot.sendMessage(chatId, JSON.stringify(element))  
            })
            return
        }
        return bot.sendMessage(chatId, 'Я не понимаю')
    })

    // bot.on('callback_query', async msg => {
    //     const data = msg.data
    //     const chatId = msg.message?.chat.id

    //     const todo = await $api.get('/todos/' + data)
    //     return bot.sendMessage(chatId, JSON.stringify(todo.data))
    // })
}

start()