const { capitalize } = require('./../functions/micaiahFunction')

let string = 'air_conditioning'
let testFunc = () => {
    return
}

test('capitalize() should take in a function and return undefined', () => {
    expect(capitalize(testFunc())).toBe(undefined)
})

test('capitalize() should take in a boolean and return undefined', () => {
        expect(capitalize(true)).toBe(undefined)
})

test('capitalize() should take in a number and return undefined', () => {
    expect(capitalize(34)).toBe(undefined)
})

test('capitalize() should take in an object and return undefined', () => {
    expect(capitalize({key: 'value'})).toBe(undefined)
})

test('capitalize() should take in a string separated with underscores, and return a new string with the first letter capitalized and the underscore changed to a space', () => {
    expect(capitalize(string)).toBe('Air conditioning')
})