`use strict`
let play = true;
const btnPlay = document.querySelector(".btn-play");
const contenitoreGioco = document.querySelector(".container-small");

const dataSquare = document.querySelector("numCasella")


btnPlay.addEventListener("click", bottoneGioca);

function bottoneGioca() {
    contenitoreGioco.innerHTML = "";
    play = true;
    const difficulty = document.getElementById("select-level").value;
    console.log(difficulty);

    if (difficulty === "Facile") {
        numeroCaselle = 100;
    } else if (difficulty === "Intermedio") {
        numeroCaselle = 81;
    } else if (difficulty === "Difficile") {
        numeroCaselle = 49;
    }
    creaCaselle();


};


function creaBombe() {
    const totBombe = [];
    for (let i = 0; i < 16; i++) {
        const bombaRandom = (Math.floor(Math.random() * numeroCaselle) + 1);

        if ((totBombe.indexOf(bombaRandom)) === -1) {
            totBombe.push(bombaRandom);
        } else { i-- };
    }
    console.log(totBombe);


    return totBombe;
}



function creaCaselle() {
    const arrayBombe = creaBombe();

    for (let i = 0; i < numeroCaselle; i++) {


        const square = document.createElement("div");
        const squaresPerRow = Math.sqrt(numeroCaselle);

        square.classList.add("squares");
        // square.textContent = (i + 1).toString();
        square.style.flexBasis = `calc(100% / ${squaresPerRow})`;

        // numero le caselle "non visibilmente"
        square.dataset.numCasella = ((i + 1).toString());

        ////////////////////

        square.addEventListener("click", function () {

            if (play === false) {
                return
            }
            square.classList.toggle("toggleColor");

            for (let j = 0; j < 16; j++) {

                if (arrayBombe[j] === i + 1) {
                    square.classList.toggle("toggleBomba");
                    square.innerHTML = `<i class="fa-solid fa-bomb"></i>`;
                    console.log(arrayBombe[j]);
                    play = false;
                }

            }
        })
        contenitoreGioco.append(square);
    }
}
