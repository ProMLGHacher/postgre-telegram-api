import { AxiosError } from "axios"
import { bot } from "../../bot.js"
import { checkpoint } from "../../services/checkpoint.js"

export const checkpointController = async (text, chatId) => {
    
    try {
        const data = await checkpoint()
        console.log(data.status);
        return bot.sendMessage(chatId, "Успешно")
    } catch (error) {
        if (error instanceof AxiosError) {
            return bot.sendMessage(chatId, JSON.stringify(error))
        } else {
            return bot.sendMessage(chatId, JSON.stringify(error))
        }
    }
}