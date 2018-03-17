const harmlessRansomNote = require('./harmless-ransom-note')

it('should return false', () => {
  const noteText = 'this is a secret note for you from a secret admirer'
  const magazineText =
    'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that is not as hard as it seems this is my advice for you'
  expect(harmlessRansomNote(noteText, magazineText)).toBe(false)
})

it('should return true', () => {
  const noteText = 'this is a secret note for you from an admirer'
  const magazineText =
    'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that is not as hard as it seems this is my advice for you'
  expect(harmlessRansomNote(noteText, magazineText)).toBe(true)
})


