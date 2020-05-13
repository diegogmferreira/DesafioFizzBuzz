const readlineSync = require('readline-sync')

let number = []
let Fizz = 0
let Buzz= 0
let FizzBuzz = 0

fizzBuzz(number)

function askNumber() {
    try {
        number = readlineSync.question('\nDigite um conjunto de numeros de 1 a 1000 separados por ",". \n')
        .split(",").map(Number)
        verifyNumber(number)
    } catch (error) { 
        console.error(eror)
    }

}
function verifyNumber(number) {   
    try {
        number.forEach(element => {
            if ( element < 1 || element > 1000 || isNaN(element)) {
                    console.log("Número Inválido!, Tente novamente")
                    number = []
                    askNumber();
            }
        })
    } catch (error) {
        console.error(error)
    }
}   
function fizzBuzz () {
    askNumber()
    console.log("\nResultado:")
    number.forEach(element => {
        if ( element % 3 == 0 && element % 5 == 0) {
            console.log("FizzBuzz")
            FizzBuzz ++
        } else if ( element % 3 == 0 ) {
            console.log("Fizz")
            Fizz ++
        } else if ( element % 5 == 0 ) {
            console.log("Buzz")
            Buzz ++
        } else {
            console.log(element)
        }
    })
    console.log (`..............................................................\nResumo:\n${Fizz} Fizz\n${Buzz} Buzz\n${FizzBuzz} FizzBuzz\n..............................................................`)
}
