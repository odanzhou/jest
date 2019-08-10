import sum from './sum'

test('sum(1, 2) to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('sum(1, 2) to not equal 2', () => {
    expect(sum(1, 2)).not.toBe(2)
})