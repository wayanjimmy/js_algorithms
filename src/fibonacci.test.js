const fibonacci = require('./fibonacci')
const fibMemo = require('./memoized-fibonacci')

it('should return 3', () => {
  expect(fibonacci(4)).toBe(3)
})

it('should return 34', () => {
  expect(fibonacci(9)).toBe(34)
})

it('should return 3', () => {
  expect(fibMemo(4)).toBe(3)
})

it('should return 34', () => {
  expect(fibMemo(9)).toBe(34)
})
