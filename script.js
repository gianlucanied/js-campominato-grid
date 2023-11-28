/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

const startButton = document.querySelector (".button-start");

const main = document.querySelector ("main");

function showContainer() {

    const container = document.createElement("div");
    container.classList.add ("container");
    main.append (container);

    for (let i=1; i<=100; i++) {

        const square = document.createElement("div");
        square.classList.add ("square");
        square.append(i);
        container.append (square);

        
    square.addEventListener("click",() => {
        console.log("Ho selezionato lo square numero ",i);
        square.classList.add ("clicked");
}
)
    }
    startButton.disabled = true;
}

startButton.addEventListener("click", showContainer);