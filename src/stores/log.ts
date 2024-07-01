import { defineStore } from 'pinia'
import { type ILog } from '../entitys/log'

export const logListStore = defineStore('logList', {
    state: () => ({
        logs: [] as ILog[],
    }),
    actions: {
        addLog(log: ILog): void {
          this.logs.push(log);
        },
        removeLog(id: number): void {
          this.logs = this.logs.filter(log => log.id !== id);
        },
        includesLog(log: ILog): Boolean{
            const logs = this.logs.filter(log1 => log1.id === log.id);
            return logs.length > 0
        }
    }
})
