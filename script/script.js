`use strict`

const btnPlay = document.querySelector(".btn-play");
const contenitoreGioco = document.querySelector(".container-small");

const dataSquare = document.querySelector("numCasella")


btnPlay.addEventListener("click", bottoneGioca);

function bottoneGioca() {
    contenitoreGioco.innerHTML = "";
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
    creaBombe();

};


function creaBombe() {
    const totBombe = [];
    for (let i = 0; i < 16; i++) {
        const bombaRandom = (Math.floor(Math.random() * numeroCaselle) + 1);
         totBombe.push(bombaRandom);
    }
    console.log(totBombe);


    return totBombe;
}



function creaCaselle() {
    for (let i = 0; i < numeroCaselle; i++) {


        const square = document.createElement("div");
        const squaresPerRow = Math.sqrt(numeroCaselle);       

        square.classList.add("squares");
        // square.textContent = (i + 1).toString();
        square.style.flexBasis = `calc(100% / ${squaresPerRow})`;
        
        // numero le caselle "non visibilmente"
        square.dataset.numCasella = ((i+1).toString());
        
        ////////////////////

        square.addEventListener("click", function () {
            square.classList.toggle("toggleColor");
        })
        contenitoreGioco.append(square);
    }
}
