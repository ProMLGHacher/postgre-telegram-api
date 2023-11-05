import { AxiosError } from "axios"
import { client } from "../../bot.js"
import { checkpoint } from "../../services/checkpoint.js"

export const checkpointController = async (text, chatId) => {
    
    try {
        const data = await checkpoint()
        console.log(data.status);
        return chatId.reply(data.status + " - успешно")
    } catch (error) {
        if (error instanceof AxiosError) {
            return chatId.reply(JSON.stringify(error))
        } else {
            return chatId.reply(JSON.stringify(error))
        }
    }
}