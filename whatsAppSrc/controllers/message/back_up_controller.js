import { AxiosError } from "axios"
import { client } from "../../bot.js"
import { getDbSize } from "../../services/db_size.js"
import { createBackUp } from "../../services/create_backup.js"

export const createBackUpController = async (text, chatId) => {
    
    try {
        const data = await createBackUp()
        console.log(data.status);
        return chatId.reply("Успешно")
    } catch (error) {
        if (error instanceof AxiosError) {
            return chatId.reply(JSON.stringify(error.message))
        } else {
            return chatId.reply(JSON.stringify(error.message))
        }
    }
}