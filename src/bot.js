import TelegramBot from "node-telegram-bot-api"
import { sessionsController } from "./controllers/message/sessions_controller.js"
import { queriesController } from "./controllers/message/queries_controller.js"
import { hardwareController } from "./controllers/message/hardware_controller.js"
import { dbSizeController } from "./controllers/message/db_size_controller.js"
import { createBackUpController } from "./controllers/message/back_up_controller.js"
import { indexesListController, reindexController } from "./controllers/message/indexes_controller.js"
import { tablesController } from "./controllers/message/tables_controller.js"
import { reindexIndexQueryController, reindexTableQueryController } from "./controllers/query/indexes_query_controller.js"
import { checkpointController } from "./controllers/message/checkpoint_controller.js"
import { prevArr, users } from "./index.js"

const token = '6559198159:AAGc51JszySdnxVvz183MJMg66vdhxhfCUk'

export const bot = new TelegramBot(token, { polling: true })

bot.setMyCommands([
    {
        command: '/start',
        description: 'Начать работать'
    },
    {
        command: '/sessions',
        description: 'Пуолучить сессии пользователей'
    },
    {
        command: '/queris',
        description: 'Пуолучить статистику запросов'
    },
    {
        command: '/hardware',
        description: 'Пуолучить нагрузку ресурсов'
    },
    {
        command: '/db_size',
        description: 'Пуолучить размерность базы данных'
    },
    {
        command: '/backup',
        description: 'Создать backup базы данных'
    },
    {
        command: '/indexes',
        description: 'Получить список индексов'
    },
    {
        command: '/tables',
        description: 'Получить список таблиц'
    },
    {
        command: '/reindex',
        description: 'Реиндексировать базу данных'
    },
    {
        command: '/checkpoint',
        description: 'Выполнить команду checkpoint и перезапускает базу'
    },
])

export const start = () => {
    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id
        if (text === '/start') {
            users.add(chatId)
            prevArr.push(1)
            console.log(prevArr);
            return bot.sendMessage(chatId, 'Привет!')
        }
        if (text === '/sessions') {
            return await sessionsController(text, chatId)
        }
        if (text === '/queris') {
            return await queriesController(text, chatId)
        }
        if (text === '/hardware') {
            return await hardwareController(text, chatId)
        }
        if (text === '/db_size') {
            return await dbSizeController(text, chatId)
        }
        if (text === '/backup') {
            return await createBackUpController(text, chatId)
        }
        if (text === '/indexes') {
            return await indexesListController(text, chatId)
        }
        if (text === '/tables') {
            return await tablesController(text, chatId)
        }
        if (text === '/reindex') {
            return await reindexController(text, chatId)
        }
        if (text === '/checkpoint') {
            return await checkpointController(text, chatId)
        }
        return bot.sendMessage(chatId, 'Я не понимаю')
    })

    bot.on('callback_query', async msg => {
        const data = msg.data
        const text = msg.message.text
        const chatId = msg.message?.chat.id
        const messageId = msg.message?.message_id

        if (data === 'reindex_index') {
            return await reindexIndexQueryController(text, chatId, messageId)
        }
        if (data === 'reindex_table') {
            return await reindexTableQueryController(text, chatId, messageId)
        }
    })
}