import { AxiosError } from "axios"
import { bot } from "../../bot.js"
import { getSessions } from "../../services/sessions.js"

const options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Удалить', callback_data: 'delete_session' }]
        ]
    })
}

export const sessionsController = async (text, chatId) => {
    
    try {
        const data = await getSessions()
        data.forEach(element => {
            bot.sendMessage(chatId, `Пользователь: ${element.user_name}.\nКоличество сессий: ${element.session_count}.\nСамый долгий запрос: ${element.max_query_duration.replace('-', '')}`, options)
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