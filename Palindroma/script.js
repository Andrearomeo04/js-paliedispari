function check (word) {
    let reverse_word
    reverse_word = word.split('').reverse('').join('')

    if (reverse_word.toLowerCase() === word.toLowerCase()) {
        console.log('la parola è palindroma!')
    } else {
        console.log('la parola non è palindroma... prova con un altra!')
    }
}

let ins_word = prompt('inserisci una parola')

check(ins_word.toLowerCase())