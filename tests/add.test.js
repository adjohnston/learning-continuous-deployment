const sum = require('../src/sum')

describe('#sum', () => {
  test('given 1 & 2 it should return 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('given 2 & 2 it should return 4', () => {
    expect(sum(2, 2)).toBe(4)
  })

  test('given no arguments it should return 0', () => {
    expect(sum()).toBe(0)
  })

  test('given a single argument it should return that value', () => {
    expect(sum(2)).toBe(2)
  })
})
