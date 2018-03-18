const caesarChiper = require('./caesar-chiper')

it('should return bqq mggrgt', () => {
  expect(caesarChiper('zoo keeper', 2)).toBe('bqq mggrgt')
})

it('should return Bqq Mggrgt', () => {
  expect(caesarChiper('Zoo Keeper', 2)).toBe('Bqq Mggrgt')
})
