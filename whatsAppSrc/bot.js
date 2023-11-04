import { Client } from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal'
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

export const client = new Client()

client.initialize()

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!')
});

client.on('message', async (message) => {

    const text = message.body

    if (message.body === 'hello') {
        message.reply('Hiiiii')
    }

    if (text === '/start') {
        // users.add(chatId)
        console.log(prevArr);
        return message.reply('Привет!')
    }
    if (text === '/sessions') {
        return await sessionsController(text, message)
    }
    if (text === '/queris') {
        return await queriesController(text, message)
    }
    if (text === '/hardware') {
        return await hardwareController(text, message)
    }
    if (text === '/db_size') {
        return await dbSizeController(text, message)
    }
    if (text === '/backup') {
        return await createBackUpController(text, message)
    }
    if (text === '/indexes') {
        return await indexesListController(text, message)
    }
    if (text === '/tables') {
        return await tablesController(text, message)
    }
    if (text === '/reindex') {
        return await reindexController(text, message)
    }
    if (text === '/checkpoint') {
        return await checkpointController(text, message)
    }
    return message.reply('Я не понимаю')

})


// bot.setMyCommands([
//     {
//         command: '/start',
//         description: 'Начать работать'
//     },
//     {
//         command: '/sessions',
//         description: 'Получить сессии пользователей'
//     },
//     {
//         command: '/queris',
//         description: 'Получить статистику запросов'
//     },
//     {
//         command: '/hardware',
//         description: 'Получить нагрузку ресурсов'
//     },
//     {
//         command: '/db_size',
//         description: 'Получить размер базы данных'
//     },
//     {
//         command: '/backup',
//         description: 'Создать backup базы данных'
//     },
//     {
//         command: '/indexes',
//         description: 'Получить список индексов'
//     },
//     {
//         command: '/tables',
//         description: 'Получить список таблиц'
//     },
//     {
//         command: '/reindex',
//         description: 'Реиндексировать базу данных'
//     },
//     {
//         command: '/checkpoint',
//         description: 'Выполнить команду checkpoint и перезапустить базу'
//     },
// ])

export const start = () => {

}

// export const start = () => {
//     client.on('message', async msg => {
//         const text = msg.text
//         const chatId = msg.chat.id
//         if (text === '/start') {
//             users.add(chatId)
//             console.log(prevArr);
//             return client.sendMessage(chatId, 'Привет!')
//         }
//         if (text === '/sessions') {
//             return await sessionsController(text, chatId)
//         }
//         if (text === '/queris') {
//             return await queriesController(text, chatId)
//         }
//         if (text === '/hardware') {
//             return await hardwareController(text, chatId)
//         }
//         if (text === '/db_size') {
//             return await dbSizeController(text, chatId)
//         }
//         if (text === '/backup') {
//             return await createBackUpController(text, chatId)
//         }
//         if (text === '/indexes') {
//             return await indexesListController(text, chatId)
//         }
//         if (text === '/tables') {
//             return await tablesController(text, chatId)
//         }
//         if (text === '/reindex') {
//             return await reindexController(text, chatId)
//         }
//         if (text === '/checkpoint') {
//             return await checkpointController(text, chatId)
//         }
//         return client.sendMessage(chatId, 'Я не понимаю')
//     })

//     client.on('callback_query', async msg => {
//         const data = msg.data
//         const text = msg.message.text
//         const chatId = msg.message?.chat.id
//         const messageId = msg.message?.message_id

//         if (data === 'reindex_index') {
//             return await reindexIndexQueryController(text, chatId, messageId)
//         }
//         if (data === 'reindex_table') {
//             return await reindexTableQueryController(text, chatId, messageId)
//         }
//     })
// }