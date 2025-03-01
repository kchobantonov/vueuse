import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { useRound } from './index'

describe('useRound', () => {
  it('should be defined', () => {
    expect(useRound).toBeDefined()
  })
  it('should work', () => {
    const base = ref(20.49)
    const result = useRound(base)
    expect(result.value).toBe(20)
    base.value = -20.51
    expect(result.value).toBe(-21)
  })
})
