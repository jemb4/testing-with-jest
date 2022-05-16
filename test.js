const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum (14, 9);
    
    expect(total).toBe(23);
})

test("One euro should be 1.206 dollars", function()
{
    const { fromEuroToDollar } = require('./app.js')
    const expected = 3.5 * 1.2; 
    const dollars = fromEuroToDollar(3.5)
    
     expect(dollars).toBe(expected);
})

test("One dollar should be 128,94 yen", function()
{
    const { fromDollarToYen } = require('./app.js')
    const expected =  3.5 / 1.2 * 127.9; 
    
     expect(fromDollarToYen(3.5)).toBe(expected);
})

test("One yen should be 0,0063 pounds", function()
{
    const { fromYenToPound } = require('./app.js')
    const expected =  3.5 / 1.2 * 0.8; 
    
     expect(fromYenToPound(3.5)).toBe(expected);
})