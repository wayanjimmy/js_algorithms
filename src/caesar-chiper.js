function caesarChiper(value, num) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  num = num % 26
  return value
    .toLowerCase()
    .split('')
    .map((char, index) => {
      if (char === ' ') {
        return char
      }

      const currIndex = alphabet.indexOf(char)
      let newIndex = currIndex + num
      if (newIndex > 25) {
        newIndex -= 26
      }
      if (newIndex < 0) {
        newIndex = 26 + currIndex
      }
      if (value[index] === char.toUpperCase()) {
        return alphabet[newIndex].toUpperCase()
      }
      return alphabet[newIndex]
    })
    .join('')
}

module.exports = caesarChiper
