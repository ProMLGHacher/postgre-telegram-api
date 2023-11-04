import { start } from "./bot.js"
import { startErrorCheckWorker } from "./workers/check.js"

export const users = new Set()

export let prevArr = []

startErrorCheckWorker()
start()