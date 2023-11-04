import { AxiosError } from "axios"
import { bot } from "../../index.js"
import { getSessions } from "../../services/sessions.js"
import { getHardware } from "../../services/hardware.js"

export const hardwareController = async (text, chatId) => {
    
    try {
        const data = await getHardware()
        return bot.sendMessage(chatId, JSON.stringify(data))
    } catch (error) {
        if (error instanceof AxiosError) {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        } else {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        }
    }
}