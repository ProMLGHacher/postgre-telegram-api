import { AxiosError } from "axios"
import { bot } from "../../bot.js"
import { getSessions } from "../../services/sessions.js"
import { getTables } from "../../services/tables.js"

const options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Реиндексировать', callback_data: 'reindex_table' }]
        ]
    })
}

export const tablesController = async (text, chatId) => {
    
    try {
        const data = await getTables()
        data.forEach(element => {
            bot.sendMessage(chatId, element, options)
        })
        return
    } catch (error) {
        if (error instanceof AxiosError) {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        } else {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        }
    }
}