import { AxiosError } from "axios"
import { bot } from "../../bot.js"
import { getDbSize } from "../../services/db_size.js"

export const dbSizeController = async (text, chatId) => {
    
    try {
        const data = await getDbSize()
        return bot.sendMessage(chatId, JSON.stringify(data))
    } catch (error) {
        if (error instanceof AxiosError) {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        } else {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        }
    }
}