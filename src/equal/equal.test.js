import { getAuthor, getBook } from './equal'

test('测试toEqual', () => {
    expect(getAuthor).toEqual(getAuthor)
    expect(getAuthor()).toEqual(getAuthor())
    expect(getAuthor()).not.toEqual(getBook())
})