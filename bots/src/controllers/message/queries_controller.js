import { AxiosError } from "axios"
import { bot } from "../../bot.js"
import { getSessions } from "../../services/sessions.js"
import { getQueries } from "../../services/queries.js"

export const queriesController = async (text, chatId) => {
    try {
        const data = await getQueries()
        data.forEach(element => {
            console.log(element);
            bot.sendMessage(chatId, `Query запрос: ${element.queryText}\nКоличество запросов: ${element.queryCount}\nМасимальное время запроса: ${element.maxQueryDuration.replace('-', '')}`)
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