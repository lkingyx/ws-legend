import { expect, describe, it, beforeEach } from 'vitest'
import { LogSystem } from '../LogSystem'
import { logListStore } from '../../stores/log'
import { createPinia, setActivePinia } from 'pinia'
import { Game } from '../game'
import { ILogType } from '@/enums/logtype'

describe('LogSystem', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  it('test create 是否成功存储', () => {
    const game = new Game
    const logSystem = new LogSystem(game)
    const log = logSystem.create({
      id: 0,
      content: '测试',
      type: ILogType.DIALOG,
      colour: '#AAA'
    })
    console.log(log)
    expect(logListStore().includesLog(log)).toBe(true)
  })

  it('test createDefault 创建的content和type是否正确', () => {
    const game = new Game
    const logSystem = new LogSystem(game)
    const log = logSystem.createDefault('测试', ILogType.ENVLOG)
    console.log(log)
    expect(log.content).toBe('测试')
    expect(log.type).toBe(ILogType.ENVLOG)
  })
})
