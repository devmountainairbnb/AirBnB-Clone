const { bangAsAFunction } = require('./../functions/spencersFunction')

let blah = 'this is a string'

test('bangFunction() typeof should return boolean', () => {
    expect(typeof(bangAsAFunction(true))).toBe('boolean')
})

test('bangFunction() should take in true and return false', () => {
        expect(bangAsAFunction(true)).toBe(false)
})

test('bangFunction() should take in false and return true', () => {
    expect(bangAsAFunction(false)).toBe(true)
})

test('bangFunction() should pass in a non bool and return as Not A Number', () => {
    expect(bangAsAFunction('not-a-boolean')).toBe(NaN)
})

test('bangFunction() should pass in a variable and return undefined', () => {
    expect(bangAsAFunction(blah)).toBe(undefined)
})