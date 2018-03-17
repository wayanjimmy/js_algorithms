const isPalindrome = require('./is-palindrome')

it('is a palindrom', () => {
  expect(isPalindrome("Madam I'm Adam")).toBe(true)
})

it('is not a palindrom', () => {
  expect(isPalindrome('coding javascript')).toBe(false)
})
