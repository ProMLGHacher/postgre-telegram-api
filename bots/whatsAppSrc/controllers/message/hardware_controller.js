import { AxiosError } from "axios"
import { client } from "../../bot.js"
import { getSessions } from "../../services/sessions.js"
import { getHardware } from "../../services/hardware.js"

export const hardwareController = async (text, chatId) => {
    
    try {
        const data = await getHardware()
        return chatId.reply(JSON.stringify(data))
    } catch (error) {
        if (error instanceof AxiosError) {
            return chatId.reply(JSON.stringify(error.message))
        } else {
            return chatId.reply(JSON.stringify(error.message))
        }
    }
}