function reverseArrayInPlace(arr) {
  for (let j = 1; j < arr.length; j++) {
    let temp = arr[0]

    for (let i = 0; i < arr.length - j; i++) {
      arr[i] = arr[i + 1]
    }

    arr[arr.length - j] = temp
  }

  return arr
}

module.exports = reverseArrayInPlace
