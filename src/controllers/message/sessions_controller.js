import { AxiosError } from "axios"
import { bot } from "../../index.js"
import { getSessions } from "../../services/sessions.js"

export const sessionsController = async (text, chatId) => {
    
    try {
        const data = await getSessions()
        data.forEach(element => {
            bot.sendMessage(chatId, JSON.stringify(element))
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