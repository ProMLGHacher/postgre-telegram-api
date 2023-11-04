import { AxiosError } from "axios"
import { bot } from "../../bot.js"
import { getDbSize } from "../../services/db_size.js"

export const dbSizeController = async (text, chatId) => {
    
    try {
        const data = await getDbSize()
        return bot.sendMessage(chatId, `Имя базы: ${data.databaseSizeInfo.unitName}\nРазмер базы: ${(data.databaseSizeInfo.bufferSize / 1024 / 1024).toFixed(2)}МБ\n\n${(data.tablesInfo.map((r) => `Таблица: ${r.unitName}\nРазмер: ${(r.bufferSize / 1024 / 1024).toFixed(2)}МБ\n`)).join('\n')}`)
    } catch (error) {
        if (error instanceof AxiosError) {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        } else {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        }
    }
}