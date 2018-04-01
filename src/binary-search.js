function binarySearch(arrayNum, key) {
  const middleIndex = Math.floor(arrayNum.length / 2)
  const middleNum = arrayNum[middleIndex]

  if (middleNum === key) {
    return true
  } else if (middleNum < key && arrayNum.length > 1) {
    return binarySearch(arrayNum.splice(middleIndex, arrayNum.length), key)
  } else if (middleNum > key && arrayNum.length > 1) {
    return binarySearch(arrayNum.splice(0, middleIndex), key)
  } else {
    return false
  }
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56))

module.exports = binarySearch
