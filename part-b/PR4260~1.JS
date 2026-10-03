// Problem 5 — Schema Validator (Medium)
// Checks that each key in the schema exists on the object with the expected typeof.

function validateSchema(obj, schema) {
  const errors = []

  for (const [key, expectedType] of Object.entries(schema)) {
    if (!Object.hasOwn(obj, key)) {
      errors.push(`${key}: missing property`)
      continue
    }

    const actualType = typeof obj[key]
    if (actualType !== expectedType) {
      errors.push(`${key}: expected ${expectedType}, got ${actualType}`)
    }
  }

  return errors
}

const schema = { name: 'string', age: 'number', isAdmin: 'boolean' }

console.log(validateSchema({ name: 'Ada', age: 21, isAdmin: false }, schema))
// []

console.log(validateSchema({ name: 'Ada', age: '21' }, schema))
// ['age: expected number, got string', 'isAdmin: missing property']
