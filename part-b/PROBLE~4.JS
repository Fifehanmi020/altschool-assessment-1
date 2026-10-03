// Problem 4 — Private Counter Factory (Easy)
// The count lives in a closure, so it can only be changed through the methods.

function createCounter() {
  let count = 0 // private: not a property of the returned object

  return {
    increment() {
      count++
    },
    decrement() {
      count--
    },
    get value() {
      return count
    }
  }
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()

console.log(counter.value)  // 1
console.log(counter.count)  // undefined — not directly accessible
