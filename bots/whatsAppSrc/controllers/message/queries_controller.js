import { AxiosError } from "axios"
import { client } from "../../bot.js"
import { getSessions } from "../../services/sessions.js"
import { getQueries } from "../../services/queries.js"

export const queriesController = async (text, chatId) => {
    try {
        const data = await getQueries()
        data.forEach(element => {
            chatId.reply(JSON.stringify(element))
        })
        return
    } catch (error) {
        if (error instanceof AxiosError) {
            return chatId.reply(JSON.stringify(error.message))
        } else {
            return chatId.reply(JSON.stringify(error.message))
        }
    }
}