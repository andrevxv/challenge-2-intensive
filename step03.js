let number = '3'

// let numberOrNot = typeof number === 'number' ? 'It is a number' : 'It is not a number'

function isNumber (verif){
    return typeof verif === "number" ? 'it is a number' : 'it is not a number'
}

alert(isNumber(number))

