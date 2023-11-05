import { $api } from "../api.js"

export type DbSize = {
    databaseSizeInfo: {
        unitName: string,
        bufferSize: number
    },
    tablesInfo: {
        unitName: string,
        bufferSize: number
    }[]
}

export const getDbSize = async () => new Promise<DbSize>(async (resolve, reject) => {
    try {
        const data = await $api.get<DbSize>('/api/analytics/databaseInfo')
        resolve(data.data)
    } catch (error) {
        reject(error)
    }
})