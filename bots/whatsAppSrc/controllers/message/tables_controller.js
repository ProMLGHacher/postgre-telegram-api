import { AxiosError } from "axios"
import { client } from "../../bot.js"
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
            chatId.reply(element)
        })
        return
    } catch (error) {
        if (error instanceof AxiosError) {
            return chatId.reply(JSON.stringify(error.message))
        } else {
            return chatId.reply(JSON.stringify(error.message))
        }
    }
}