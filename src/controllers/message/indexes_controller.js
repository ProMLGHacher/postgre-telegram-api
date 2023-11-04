import { AxiosError } from "axios"
import { bot } from "../../index.js"
import { getIndexesList } from "../../services/indexes_list.js"
import { reindexDatabase } from "../../services/reindex_database.js"

const options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Реиндексировать', callback_data: 'reindex_index' }]
        ]
    })
}

export const indexesListController = async (text, chatId) => {
    try {
        const data = await getIndexesList()
        data.map((e) => {
            bot.sendMessage(chatId, e, options)
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

export const reindexController = async (text, chatId) => {
    try {
        const data = await reindexDatabase()
        return bot.sendMessage(chatId, 'Успешно')
    } catch (error) {
        if (error instanceof AxiosError) {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        } else {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        }
    }
}