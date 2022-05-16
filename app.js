const sum = (a, b) => {
    return a + b
}

const fromEuroToDollar = (valueInEuro) => 
{
    let valueInDollar = valueInEuro * 1.2;

    return valueInDollar
}

const fromDollarToYen = (valueInDollar) => 
{
    let valueInYen = valueInDollar / 1.2 * 127.9

    return valueInYen
}

const fromYenToPound = (valueInYen) => 
{
    let valueInPound = valueInYen / 1.2 * 0.8

    return valueInPound
}


module.exports = { sum , fromEuroToDollar , fromYenToPound , fromDollarToYen };