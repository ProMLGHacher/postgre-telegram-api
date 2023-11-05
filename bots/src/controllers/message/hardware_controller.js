import { AxiosError } from "axios"
import { bot } from "../../bot.js"
import { getSessions } from "../../services/sessions.js"
import { getHardware } from "../../services/hardware.js"

const options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Обновление...', callback_data: 'call' }]
        ]
    })
}

const emptyKeyboard = JSON.stringify({
    inline_keyboard: [
        []
    ]
})


export const hardwareController = async (text, chatId) => {

    try {
        let data = await getHardware()
        const msg = await bot.sendMessage(chatId, `Загруженнсость процессора: ${Math.floor(data.cpuUsagePercentage)}%\nСвободно памяти: ${Math.floor(data.availableRamMb)}МБ\nИспользуется памяти ${Math.floor(data.maxRamSizeMb - data.availableRamMb)}МБ из ${Math.floor(data.maxRamSizeMb)}МБ`, options)
        console.log(msg.text);
        for (let index = 0; index < 10; index++) {
            data = await getHardware()
            console.log(index);
            const magOptions = index === 9 ? emptyKeyboard : options
            await new Promise((resolve) => {
                setTimeout(async () => {
                    try {
                        await bot.editMessageText(`Загруженнсость процессора: ${Math.floor(data.cpuUsagePercentage)}%\nСвободно памяти: ${Math.floor(data.availableRamMb)}МБ\nИспользуется памяти ${Math.floor(data.maxRamSizeMb - data.availableRamMb)}МБ из ${Math.floor(data.maxRamSizeMb)}МБ`, {
                            chat_id: chatId,
                            message_id: msg.message_id,
                            ...magOptions
                        })
                        resolve()
                    } catch (error) {
                        resolve()
                    }
                }, 2000);
            })
        }
        return
    } catch (error) {
        if (error instanceof AxiosError) {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        } else {
            return bot.sendMessage(chatId, JSON.stringify(error.message))
        }
    }
}