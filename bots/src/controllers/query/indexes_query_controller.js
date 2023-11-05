import { AxiosError } from "axios"
import { bot } from "../../bot.js"
import { getSessions } from "../../services/sessions.js"
import { getQueries } from "../../services/queries.js"
import { reindexIndex } from "../../services/reindex_index.js"
import { reindexTable } from "../../services/reindex_table.js"
import { deleteSession } from "../../services/deleteSession.js"

const emptyKeyboard = JSON.stringify({
    inline_keyboard: [
        []
    ]
})

export const reindexIndexQueryController = async (text, chatId, messageId) => {
    try {
        const data = await reindexIndex(text.split(' ')?.[1])
        if (data == 200) {
            return bot.editMessageText(text, {
                chat_id: chatId,
                message_id: messageId,
                reply_markup: emptyKeyboard
            })
        } else {
            return bot.editMessageText('Чтото не то', {
                chat_id: chatId,
                message_id: messageId,
                reply_markup: emptyKeyboard
            })
        }
    } catch (error) {
        if (error instanceof AxiosError) {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        } else {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        }
    }
}

export const deleteSessionController = async (text, chatId, messageId) => {
    try {
        const data = await deleteSession(text.split(' ')?.[1].replace('.', ''))
        if (data == 200) {
            return bot.editMessageText(text, {
                chat_id: chatId,
                message_id: messageId,
                reply_markup: emptyKeyboard
            })
        } else {
            return bot.editMessageText('Чтото не то', {
                chat_id: chatId,
                message_id: messageId,
                reply_markup: emptyKeyboard
            })
        }
    } catch (error) {
        if (error instanceof AxiosError) {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        } else {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        }
    }
}

export const reindexTableQueryController = async (text, chatId, messageId) => {
    try {
        const data = await reindexTable(text.split(' ')?.[2])
        if (data == 200) {
            return bot.editMessageText(text, {
                chat_id: chatId,
                message_id: messageId,
                reply_markup: emptyKeyboard
            })
        } else {
            return bot.editMessageText('Чтото не то', {
                chat_id: chatId,
                message_id: messageId,
                reply_markup: emptyKeyboard
            })
        }
    } catch (error) {
        if (error instanceof AxiosError) {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        } else {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        }
    }
}