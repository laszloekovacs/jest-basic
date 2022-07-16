import sum from '../src/sum'


test('adds two numbers correctly', () => {
    expect(sum(2, 2)).toBe(4)
})

test('calls a function', () => {
    const callback = jest.fn(() => true);

    const result = callback();

    expect(callback).toReturnWith(true)
    expect(callback).toBeCalled();
    expect(callback).toBeCalledTimes(1)
})