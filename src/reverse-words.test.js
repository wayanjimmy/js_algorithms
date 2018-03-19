const reverseWords = require('./reverse-words')

it('should return siht si a gnirts fo sdrow', () => {
  expect(reverseWords('this is a string of words')).toBe(
    'siht si a gnirts fo sdrow'
  )
})
