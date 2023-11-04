import { AxiosError } from "axios"
import { bot } from "../../bot.js"
import { getDbSize } from "../../services/db_size.js"
import { createBackUp } from "../../services/create_backup.js"

export const createBackUpController = async (text, chatId) => {
    
    try {
        const data = await createBackUp()
        console.log(data.status);
        return bot.sendMessage(chatId, data.status + " - успешно")
    } catch (error) {
        if (error instanceof AxiosError) {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        } else {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        }
    }
}