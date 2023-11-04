import { AxiosError } from "axios"
import { bot } from "../../bot.js"
import { getSessions } from "../../services/sessions.js"

export const sessionsController = async (text, chatId) => {
    
    try {
        const data = await getSessions()
        data.forEach(element => {
            bot.sendMessage(chatId, `Пользователь: ${element.user_name}.\nКоличество сессий: ${element.session_count}.\nСамый долгий запрос: ${element.max_query_duration}`)
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