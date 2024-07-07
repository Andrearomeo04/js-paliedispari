function randomnumber(){
    return Math.floor(Math.random() * 5 + 1);
}

function evenodd (sum) {
    if (sum % 2 === 0) {
        return 'pari'
    }
    return 'dispari'
}

let even_odd = prompt('scegli "pari" o "dispari"')

let num = parseInt(prompt('scegli un numero tra 1 e 5'))
console.log(num)

let computer_num = randomnumber()
console.log(computer_num)

let sum = num += computer_num

let result = evenodd(sum)

if (even_odd.toLowerCase() === result) {
    console.log('hai vinto!!')
} else {
    console.log('hai perso...')
}