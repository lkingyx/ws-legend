import { describe, it } from 'vitest'
import { logger } from '../LogUtils'

describe('LogUtils', () => {
  it('test logger打印日志', () => {
    logger.info('test')
    logger.warn('test12')
    logger.error('test123')
  })
})
