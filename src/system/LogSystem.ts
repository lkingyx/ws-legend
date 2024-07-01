import type { ILogType } from '@/enums/logtype'
import { type ILog } from '../entitys/log'
import { logListStore } from '../stores/log'
import { generateId } from '../utils/IdUtils'
import { logger } from '../utils/LogUtils'
import { System } from './system'

export class LogSystem extends System {

  defaultColour: String = '#42B883'

  /**
   * 创建日志
   */
  create(log: ILog): ILog {
    log.id = generateId()
    logListStore().addLog(log)
    logger.info(`日志类型：${log.type}，内容：${log.content}，颜色：${log.colour}，日志ID：${log.id}`)
    return log
  }

  /**
   * 创建默认颜色日志
   */
  createDefault(content: String, type: ILogType): ILog {
    return this.create({
      id: 0,
      content,
      type,
      colour: this.defaultColour
    })
  }
}
