function randomnumber(){
    return Math.floor(math.random() * 5 + 1);
}

function evenodd (sum) {
    if (sum % 2 === 0) {
        return 'pari'
    }
    return 'dispari'
}

let even_odd = prompt('scegli "pari" o "dispari"')

let num = prompt('scegli un numero tra 1 e 5')

let computer_num = randomnumber()

