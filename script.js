// Creiamo un container
const container = document.querySelector (".container");

// Diciamo che il container contiene numeri da 1 a 100 e li stampiamo

for (let i=1; i<=100; i++) {

    console.log(i);
    const square = document.createElement("div");
    square.classList.add ("square");
    square.append(i);
    container.append (square);
}