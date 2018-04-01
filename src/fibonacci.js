function fibonacci(position) {
  if (position === 1 || position === 2) {
    return 1
  }
  return fibonacci(position - 1) + fibonacci(position - 2)
}

module.exports = fibonacci
