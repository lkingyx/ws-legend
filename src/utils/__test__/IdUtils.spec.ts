import {expect, describe, it} from 'vitest'
import { generateId } from '../IdUtils'

describe('IdUtils', () => {
  it('test generateId Have Length 17', () => {
    const id = generateId()
    console.log(id)
    expect(id.toString()).toHaveLength(17)
  })
})