// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Domande da  farsi quando si crea una funzione:
// Come dovrebbe chiamarsi?
// Ho bisogno di parametri?
// Devo restituire un valore?
// Se sì, di che tipo?

/*

ROADMAP

1. Chiedere all’utente di inserire una parola
    - implementare la domanda utilizzando prompt
    - salvare la risposta in una variabile stringa (initialWord)

2. Creare una funzione per capire se la parola inserita è palindroma
    - definizione di palindroma: Una parola palindroma è una sequenza di lettere che rimane identica 
    se letta da sinistra verso destra o viceversa.
    - quindi per capire se una parola è palindroma, dobbiamo invertirla e confrontarla con l'originale.
    - se sono uguali, allora è palindroma.
        - il metodo per invertire una stringa
            - creare una stringa vuota che ospiterà la parola invertita.
            - utilizzare il ciclo for partendo dalla fine "for (let i = stringa.length -1; i >= 0; i--)"
            - aggiungere il risultato di ogni ciclo alla nuova stringa (nuovaStringa += stringa[i])
            - utilizziamo le due variabili (striga di partenza e nuova stringa) in un if/else
    - incartiamo tutto in una funzione che ci restituisce un alert con la soluzione true/false

3. Domande esistenziali
    - Come dovrebbe chiamarsi? la funzione potrebbe chiamarsi palindromeChecker
    - Ho bisogno di parametri? la funzione ha bisogno del parametro initialWord (la parola inserita dall'utente). Il resto avviene all'interno della funzione
    - Devo restituire un valore? Devo restituire un valore
    - Se sì, di che tipo? Booleano true/false

*/

// PALINDROMA

// const inputWord = prompt('To find out whether a word is a palindrome, write it here and press OK.');
// const initialWord = inputWord.toLowerCase();
// let reversedWord = '';
// let palindrome = false;

// function palindrome(initialWord) {}

// for (let i = initialWord.length - 1; i >= 0; i--) {
//     const initialWordElement = initialWord[i];
//     reversedWord += initialWordElement;
// }

// console.log(initialWord);
// console.log(reversedWord);

// if (reversedWord === initialWord) {
//     palindrome = true
// }

// console.log(palindrome);

// const response = alert('is the word palindrome? ' + palindrome)

// 🔴 la funzione deve essere indipendente da variabili esterne!

// -------------------------------------
// ➡️ CODICE COMPLETO "PALINDROMO"
// -------------------------------------

// function isPalindrome(initialWord) {

//     let reversedWord = '';

//     for (let i = initialWord.length - 1; i >= 0; i--) {
//         const initialWordElement = initialWord[i];
//         reversedWord += initialWordElement;
//     }

//     return reversedWord === initialWord;
// }

// const inputWord = prompt('To find out whether a word is a palindrome, write it here and press OK.');
// const initialWord = inputWord.toLowerCase();

// const response = isPalindrome(initialWord);
// alert('Is the word a palindrome? ' + response);

// -------------------------------------
// 🔚 FINE DEL CODICE "PALINDROMO"
// -------------------------------------

// Pari e Dispari
// 1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// 2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// 3. Sommiamo i due numeri
// 4. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// 5. Dichiariamo chi ha vinto.

/* ROADMAP

- stabiliamo cosa deve restituire la funzione
    - la funzione restituisce il vincitore

- quali saranno gli argomenti della funzione?
    - gli argomenti della funzione sono quegli elementi che dovranno essere presi dall'esterno:
        - la scelta tra pari e dispari del giocatore
        - il numero compreso tra 1 e 5 (inclusi) scelto dal giocatore

- stabiliamo la logica interna alla funzione
    - generazione del numero random (usando una funzione)
    - sommiamo i numeri
    - usiamo %2 per stabilire se la somma è pari o dispari (usando una funzione)

- la funzione principale dichiara il vincitore in un alert

🔴 le funzioni in totale sono 3:
    - la funzione che genera il numero random
    - la funzione che stabilisce se la somma è pari o dispari
    - la funzione che dichiara chi ha vinto
Domanda: serve realmente la funzione che dichiara chi ha vinto? Nelle istruzioni non è chiaro se debba essere una funzione.

➡️ possiamo iniziare creando la funzione che genera numeri random
    e quella che stabilisce se la somma è pari o dispari.
    Dovranno poi essere chiamate all'interno della funzione principale.

📋 Stabiliamo quanche nome, per essere coerenti in seguito:
scelta pari o dispari del giocatore: playerChoice
scelta del numero del giocatore: playerNum
nome della fuzione principale: winnerDeclaration
nome della funzione che genera numeri random: randomGenerator
nome della funzione che stabilisce se la somma è pari o dispari: numberComparison
nome della somma: numberSum


*/
// 🔴 dovremo implementare una logica che restituisce errore se il giocatore inserice una scelta non valida e
// una logica che converte tutto in minuscolo se il giocatore scrive qualche lettera in maiuscolo
// let playerChoice = prompt('Pick even or odd').toLowerCase();

// while (playerChoice !== 'even' && playerChoice !== 'odd') {
//     alert('Uh-oh! Check what you wrote. You must enter EVEN or ODD.')
//     playerChoice = prompt('Pick even or odd').toLowerCase();
// }

// if (playerChoice === 'even') {
//     playerChoice = true;
// } else {
//     playerChoice = false;
// }

// console.log(playerChoice);


// // 🔴 dovremo implementare una logica che restituisce errore se il giocatore inserisce un numero non valido o una stringa
// let playerNum = Number(prompt('Pick a number between 1 and 5'));

// while (playerNum < 1 || playerNum > 5 || isNaN(playerNum)) {
//     alert('Uh-oh! That number isn\'t valid. Try again.')
//     playerNum = Number(prompt('Pick a number between 1 and 5'));
// }
// console.log(playerNum);


// // funzione che restituisce numeri random tra 1 e 5 compresi

// function randomGenerator(minNum, maxNum) {
//     return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// }

// const randomNum = randomGenerator(1, 5);
// console.log(randomNum);

// // funzione che stabilisce se la somma è PARI

// function numberComparison(randomNum, playerNum) {
//     return (randomNum + playerNum) % 2 === 0;
// }

// const comparisonResult = numberComparison(randomNum, playerNum);
// console.log(comparisonResult);

// // qunado vince il giocatore?
// // se il giocatore ha giocato PARI e numberComparison è true
// // se il giocatore ha giocato DISPARI e numberComparison è false

// if (playerChoice === comparisonResult) {
//     alert('🍻 You win! Wanna try again?');
//     window.location.reload();
// } else {
//     alert('😭 You loose... wanna try again?');
//     window.location.reload();
// }

// -------------------------------------
// ➡️ CODICE COMPLETO "PARI O DISPARI"
// -------------------------------------

// il giocatore sceglie pari o dispari e convertiamo la stringa in minuscolo
let playerChoice = prompt('Pick even or odd').toLowerCase();

// se il giocatore scrive qualcosa di inaspettato chiediamo di correggere
while (playerChoice !== 'even' && playerChoice !== 'odd') {
    alert('Uh-oh! Check what you wrote. You must enter EVEN or ODD.')
    playerChoice = prompt('Pick even or odd').toLowerCase();
}

// il giocatore scegli il numero
let playerNum = Number(prompt('Pick a number between 1 and 5'));

// se il giocatore scegli un numero <1 o >5 chiediamo di correggere
while (playerNum < 1 || playerNum > 5 || isNaN(playerNum)) {
    alert('Uh-oh! That number isn\'t valid. Try again.')
    playerNum = Number(prompt('Pick a number between 1 and 5'));
}

// la funzione racchiude tutta la logica del gioco
function paritas(playerChoice, playerNum) {

    // questo conditional converte la scelta del giocatore in un booleano: abbiamo arbitrariamente assegnato pari = true
    if (playerChoice === 'even') {
        playerChoice = true;
    } else {
        playerChoice = false;
    }

    console.log(playerChoice); // logghiamo per controllo

    console.log(playerNum); // logghiamo per controllo

    // questa funzione genera un numero random tra 1 e 5 compresi (la giocata del computer)
    function randomGenerator(minNum, maxNum) {
        return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    }

    // invochiamo la funzione randomGenerator
    const randomNum = randomGenerator(1, 5);
    console.log(randomNum); // logghiamo per controllo

    // questa funzione che stabilisce se la somma è pari
    function numberComparison(randomNum, playerNum) {
        return (randomNum + playerNum) % 2 === 0;
    }

    // invochiamo la funzione numberComparison
    const comparisonResult = numberComparison(randomNum, playerNum);
    console.log(comparisonResult); // logghiamo per controllo

    // questo conditional che dichiara se il giocatore ha vinto o perso con un alert
    if (playerChoice === comparisonResult) {
        return (alert('🍻 You win! Wanna try again?'));
    } else {
        return (alert('😭 You loose... wanna try again?'));
    }
}

// invochiamo la funzione
paritas(playerChoice, playerNum);

// quando il giocatore preme ok nell'alert, ricarichiamo la pagina
window.location.reload();

// -------------------------------------
// 🔚 FINE DEL CODICE "PARI O DISPARI"
// -------------------------------------

/*
DOMANDE:
- ha senso incartare tutto in una funzione?
- il risultato della funzione principale non può essere salvato in una variabile, corretto?
- perchè nelle invocazioni delle funzioni alcuni argomenti non etichettati come parametri da vsc?
- il conditional che converte pari e dispari in un booleano poteva essere una funzione?

function playerChoiceConverter (playerChoice) {
    return(playerChoice === 'even')
}

playerChoiceConverter(playerChoice);
*/