function harmlessRansomNote(noteText, magazineText) {
  let noteArr = noteText.split(' ')
  let magazineArr = magazineText.split(' ')
  let magazineObj = {}

  magazineArr.forEach(word => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0
    }
    magazineObj[word]++
  })

  let isNotePossible = true
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--

      if (magazineObj[word] < 0) {
        isNotePossible = false
      }
    } else {
      isNotePossible = false
    }
  })

  return isNotePossible
}

module.exports = harmlessRansomNote
