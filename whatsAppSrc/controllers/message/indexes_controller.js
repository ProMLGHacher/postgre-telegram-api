import { AxiosError } from "axios"
import { client } from "../../bot.js"
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
            chatId.reply(e)
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

export const reindexController = async (text, chatId) => {
    try {
        const data = await reindexDatabase()
        return chatId.reply('Успешно')
    } catch (error) {
        if (error instanceof AxiosError) {
            return chatId.reply(JSON.stringify(error.message))
        } else {
            return chatId.reply(JSON.stringify(error.message))
        }
    }
}