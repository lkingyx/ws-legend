import { expect, describe, it } from 'vitest'
import { convertColour } from '../ColorUtils'

describe('ColorUtils', () => {
  it('test convertColour 是否包含content和colour', () => {
    const content = convertColour('测试测试', '#CCCCCC')
    console.log(content)
    expect(content).toContain('测试测试')
    expect(content).toContain('#CCCCCC')
  })

  it('test convertColour 包含span标签情况', () => {
    const text = '<span style="color:#AAA">测试测试</span>'
    const content = convertColour(text, '#CCCCCC')
    console.log(content)
    expect(content).toBe(text)
  })
})
