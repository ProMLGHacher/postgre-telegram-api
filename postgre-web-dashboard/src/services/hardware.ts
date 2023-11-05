import { $api } from "../api.js"

export type Hardware = {
    cpuUsagePercentage: number,
    availableRamMb: number,
    maxRamSizeMb: number,
    driveUsages: {
        totalFreeSpaceGb: number,
        totalSpaceGb: number
    }[]

}

export const getHardware = async () => new Promise<Hardware>(async (resolve, reject) => {
    try {
        const data = await $api.get('/api/analytics/hardware')
        resolve(data.data)
    } catch (error) {
        reject(error)
    }
})