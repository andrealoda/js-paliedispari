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
    - implementare la domanda utilizzando prompt (dichiariamo la variabile come false, in modo da evitare un else alla fine della funzione?)
    - salvare la risposta in una variabile stringa (initialWord)

2. Creare una funzione per capire se la parola inserita è palindroma
    - definizione di palindroma: Una parola palindroma è una sequenza di lettere che rimane identica 
    se letta da sinistra verso destra o viceversa.
    - quindi per capire se una parola è palindroma, dobbiamo invertirla e confrontarla con l'originale.
    - se sono uguali, allora è palindroma.
        - il metodo per invertire una stringa
            - creare una stringa vuota che ospiterà la parola invertita
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

