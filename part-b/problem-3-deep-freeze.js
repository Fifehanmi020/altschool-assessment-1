// Problem 3 — Deep Freeze (Medium)
// Object.freeze only freezes the top level, so we freeze every nested object too.

function deepFreeze(obj) {
  // Freeze nested objects first
  for (const value of Object.values(obj)) {
    if (typeof value === 'object' && value !== null && !Object.isFrozen(value)) {
      deepFreeze(value)
    }
  }

  // Then freeze the object itself and return it
  return Object.freeze(obj)
}

const config = deepFreeze({ api: { baseUrl: 'https://x.com', retries: 3 }, debug: false })

config.api.baseUrl = 'https://changed.com' // should be ignored
config.debug = true                        // should be ignored

console.log(config.api.baseUrl, config.debug) // "https://x.com" false
console.log(Object.isFrozen(config.api))       // true
