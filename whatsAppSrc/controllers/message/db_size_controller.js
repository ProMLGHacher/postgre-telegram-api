import { AxiosError } from "axios"
import { client } from "../../bot.js"
import { getDbSize } from "../../services/db_size.js"

export const dbSizeController = async (text, chatId) => {
    
    try {
        const data = await getDbSize()
        return chatId.reply(JSON.stringify(data))
    } catch (error) {
        if (error instanceof AxiosError) {
            return chatId.reply(JSON.stringify(error.message))
        } else {
            return chatId.reply(JSON.stringify(error.message))
        }
    }
}