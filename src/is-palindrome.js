function isPalindrome(value) {
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'
  let letters = value
      .toLowerCase()
      .split('')
      .filter(char => validCharacters.includes(char))
    .join('')
  return letters === letters.split('').reverse().join('')
}

module.exports = isPalindrome
