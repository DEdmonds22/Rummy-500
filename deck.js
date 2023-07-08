// DOM elements
const computers = document.getElementById("computers");
const main = document.querySelector(".main");
const discardPile = document.getElementById("discardPile");
const users = document.getElementById("users");
const passBtn = document.querySelector(".pass-btn");
const sortingBtns = document.querySelector(".sorting-btns");
const suitBtn = document.getElementById("suit-btn");
const numberBtn = document.getElementById("number-btn");

// global variables
const pluckPile = [];
const computersDeck = [];
let usersDeck = [];
let usersDeadwood = null
const turn = "user";
const winner = null;
let selectedCard = null;

// Functions
// Generate the data
const getData = () => [
    {imgSrc: "scr/playingcards/Clover_A.png", name: "c1", suit: "club", number: "1"},
    {imgSrc: "scr/playingcards/Clover_2.png", name: "c2", suit: "club", number: "2"},
    {imgSrc: "scr/playingcards/Clover_3.png", name: "c3", suit: "club", number: "3"},
    {imgSrc: "scr/playingcards/Clover_4.png", name: "c4", suit: "club", number: "4"},
    {imgSrc: "scr/playingcards/Clover_5.png", name: "c5", suit: "club", number: "5"},
    {imgSrc: "scr/playingcards/Clover_6.png", name: "c6", suit: "club", number: "6"},
    {imgSrc: "scr/playingcards/Clover_7.png", name: "c7", suit: "club", number: "7"},
    {imgSrc: "scr/playingcards/Clover_8.png", name: "c8", suit: "club", number: "8"},
    {imgSrc: "scr/playingcards/Clover_9.png", name: "c9", suit: "club", number: "9"},
    {imgSrc: "scr/playingcards/Clover_10.png", name: "cb", suit: "club", number: "10"},
    {imgSrc: "scr/playingcards/Clover_J.png", name: "cc", suit: "club", number: "11"},
    {imgSrc: "scr/playingcards/Clover_Q.png", name: "cd", suit: "club", number: "12"},
    {imgSrc: "scr/playingcards/Clover_K.png", name: "ce", suit: "club", number: "13"},
    {imgSrc: "scr/playingcards/Diamond_A.png", name: "d1", suit: "diamond", number: "1"},
    {imgSrc: "scr/playingcards/Diamond_2.png", name: "d2", suit: "diamond", number: "2"},
    {imgSrc: "scr/playingcards/Diamond_3.png", name: "d3", suit: "diamond", number: "3"},
    {imgSrc: "scr/playingcards/Diamond_4.png", name: "d4", suit: "diamond", number: "4"},
    {imgSrc: "scr/playingcards/Diamond_5.png", name: "d5", suit: "diamond", number: "5"},
    {imgSrc: "scr/playingcards/Diamond_6.png", name: "d6", suit: "diamond", number: "6"},
    {imgSrc: "scr/playingcards/Diamond_7.png", name: "d7", suit: "diamond", number: "7"},
    {imgSrc: "scr/playingcards/Diamond_8.png", name: "d8", suit: "diamond", number: "8"},
    {imgSrc: "scr/playingcards/Diamond_9.png", name: "d9", suit: "diamond", number: "9"},
    {imgSrc: "scr/playingcards/Diamond_10.png", name: "db", suit: "diamond", number: "10"},
    {imgSrc: "scr/playingcards/Diamond_J.png", name: "dc", suit: "diamond", number: "11"},
    {imgSrc: "scr/playingcards/Diamond_Q.png", name: "dd", suit: "diamond", number: "12"},
    {imgSrc: "scr/playingcards/Diamond_K.png", name: "de", suit: "diamond", number: "13"},
    {imgSrc: "scr/playingcards/Heart_A.png", name: "h1", suit: "heart", number: "1"},
    {imgSrc: "scr/playingcards/Heart_2.png", name: "h2", suit: "heart", number: "2"},
    {imgSrc: "scr/playingcards/Heart_3.png", name: "h3", suit: "heart", number: "3"},
    {imgSrc: "scr/playingcards/Heart_4.png", name: "h4", suit: "heart", number: "4"},
    {imgSrc: "scr/playingcards/Heart_5.png", name: "h5", suit: "heart", number: "5"},
    {imgSrc: "scr/playingcards/Heart_6.png", name: "h6", suit: "heart", number: "6"},
    {imgSrc: "scr/playingcards/Heart_7.png", name: "h7", suit: "heart", number: "7"},
    {imgSrc: "scr/playingcards/Heart_8.png", name: "h8", suit: "heart", number: "8"},
    {imgSrc: "scr/playingcards/Heart_9.png", name: "h9", suit: "heart", number: "9"},
    {imgSrc: "scr/playingcards/Heart_10.png", name: "hb", suit: "heart", number: "10"},
    {imgSrc: "scr/playingcards/Heart_J.png", name: "hc", suit: "heart", number: "11"},
    {imgSrc: "scr/playingcards/Heart_Q.png", name: "hd", suit: "heart", number: "12"},
    {imgSrc: "scr/playingcards/Heart_K.png", name: "he", suit: "heart", number: "13"},
    {imgSrc: "scr/playingcards/Spade_A.png", name: "s1", suit: "spade", number: "1"},
    {imgSrc: "scr/playingcards/Spade_2.png", name: "s2", suit: "spade", number: "2"},
    {imgSrc: "scr/playingcards/Spade_3.png", name: "s3", suit: "spade", number: "3"},
    {imgSrc: "scr/playingcards/Spade_4.png", name: "s4", suit: "spade", number: "4"},
    {imgSrc: "scr/playingcards/Spade_5.png", name: "s5", suit: "spade", number: "5"},
    {imgSrc: "scr/playingcards/Spade_6.png", name: "s6", suit: "spade", number: "6"},
    {imgSrc: "scr/playingcards/Spade_7.png", name: "s7", suit: "spade", number: "7"},
    {imgSrc: "scr/playingcards/Spade_8.png", name: "s8", suit: "spade", number: "8"},
    {imgSrc: "scr/playingcards/Spade_9.png", name: "s9", suit: "spade", number: "9"},
    {imgSrc: "scr/playingcards/Spade_10.png", name: "sb", suit: "spade", number: "10"},
    {imgSrc: "scr/playingcards/Spade_J.png", name: "sc", suit: "spade", number: "11"},
    {imgSrc: "scr/playingcards/Spade_Q.png", name: "sd", suit: "spade", number: "12"},
    {imgSrc: "scr/playingcards/Spade_K.png", name: "se", suit: "spade", number: "13"},
];

//Randomize the cards
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random()-0.5);
    return cardData;
};

//Calls the randomize function, deals the inital 20 cards out, and 1 card placed in discard pile
const dealers = () => {
    const cardData = randomize();
    const firstTwentyOne = [];
    for (let i = 0; i < 21; i++) {
        const firstElement = cardData.shift();
        firstTwentyOne.push(firstElement);
    }

    for (let i = 0; i < 21; i++) {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        const backImg = document.createElement("img");

        card.classList.add = "card";
        face.classList.add = "face";
        face.classList.add = "name";
        face.classList.add = "suit";
        face.classList.add = "number";
        back.classList.add = "back";
        backImg.classList.add = "backImg";

        card.dataset.card = "card";
        face.src = firstTwentyOne[i].imgSrc;
        face.dataset.name = firstTwentyOne[i].name;
        face.dataset.suit = firstTwentyOne[i].suit;
        face.dataset.number = firstTwentyOne[i].number;
        backImg.src = "scr/playingcards/Backing.png";

        if (i === 20) {
            discardPile.appendChild(card);
            card.appendChild(face);
            card.appendChild(back);
        } else if (i % 2 === 0) {
            users.appendChild(card)
            card.appendChild(face);
            card.appendChild(back);
        } else {
            computers.appendChild(card)
            card.appendChild(face);
            face.style.display = "none";
            card.appendChild(back);
            back.appendChild(backImg);

        }
    }
    pluckPile.push(cardData);
}

dealers()

const usersD = Array.from(users.querySelectorAll("img"));
for (let i = 0; i < usersD.length; i++) {
    usersDeck.push(usersD[i]);
}


// EVENT LISTENER

// when discard pile is clicked
const discardPileFunction = function(event) {
    const parentDiv = event.target.parentNode;
    passBtn.style.display = "none";
    sortingBtns.style.visibility = "visible";
    users.appendChild(parentDiv);
    usersDeck.push(event.target);

    parentDiv.addEventListener('click', function() {
        // Handle click event for the new card
        if (!selectedCard) {
            // If no card is currently selected, store the clicked card
            selectedCard = event.target;
            selectedCard.classList.add = 'selected';
        } else {
            // If another card is already selected, swap the positions
            swapCards(selectedCard, event.target);
            selectedCard.classList.remove = 'selected';
            selectedCard = null;
        }
    });

    usersDeck.forEach(card => {
        card.style.cursor = "pointer";
        console.log(card.dataset.number)
    })
}


discardPile.addEventListener("click", discardPileFunction);

// when pass button is clicked
passBtn.addEventListener("click", () => {
    discardPile.removeEventListener("click", discardPileFunction)
    passBtn.style.display = "none";
    turn = "computer"
})

// when suitBtn is clicked
suitBtn.addEventListener("click", () => {
    suitBtn.classList.add("selected");
    numberBtn.classList.remove("selected");

    usersDeck.sort((card1, card2) => {
        const name1 = card1.dataset.name;
        const name2 = card2.dataset.name;
        return name1.localeCompare(name2);
    });
    users.innerHTML = "";
    usersDeck.forEach(card => users.appendChild(card));
})

// when numberbtn is clicked
numberBtn.addEventListener("click", () => {
    numberBtn.classList.add("selected");
    suitBtn.classList.remove("selected");

    usersDeck.sort((card1, card2) => {
        const numberOne = card1.dataset.number;
        const numberTwo = card2.dataset.number;
        return numberOne.localeCompare(numberTwo);
    });
    users.innerHTML = "";
    usersDeck.forEach(card => users.appendChild(card));
})


// Store the selected card
//let selectedCard = null;

// Add click event listeners to each card
usersDeck.forEach(card => {
  card.addEventListener('click', function(event) {
    const clickedCard = event.target
    if (!selectedCard) {
      // If no card is currently selected, store the clicked card
      selectedCard = clickedCard;
      selectedCard.classList.add = "selected";
    } else {
      // If another card is already selected, swap the positions
      swapCards(selectedCard, clickedCard);
      selectedCard.classList.remove = "selected";
      selectedCard = null;
    }
  });
});

users.addEventListener("click", () => {
    removeGrouped()
    pair()
})

// Function to swap two cards
function swapCards(card1, card2) {
    const parent1 = card1.parentNode;
    const parent2 = card2.parentNode;
    const sibling1 = card1.nextSibling;
    const sibling2 = card2.nextSibling;
  
    parent1.insertBefore(card2, sibling1);
    parent2.insertBefore(card1, sibling2);
  
    // Update usersDeck array
    const index1 = usersDeck.indexOf(card1);
    const index2 = usersDeck.indexOf(card2);
  
    // Swap the positions in the array
    [usersDeck[index1], usersDeck[index2]] = [usersDeck[index2], usersDeck[index1]];
  }


function removeGrouped() {
    usersDeck.forEach( item => {
        if (item.hasAttribute("data-grouped") && item.getAttribute("data-grouped") === "thing") {
            item.removeAttribute("data-grouped")
        }
    })
}

function pair() { //place in while loop ?
    let deadwood = null

    for (let i = 0; i < 11; i++) {    //cycles 11 times, each card, this runs for each card
        if (usersDeck[i].hasAttribute("data-grouped") && usersDeck[i].getAttribute("data-grouped") === "thing"){
            console.log("already grouped");
            continue
        } else if  (    // first ignores same number, checks if 3 of the same suit
            !(i >= 9) &&
            usersDeck[i].dataset.suit === usersDeck[i + 1].dataset.suit &&
            usersDeck[i].dataset.suit === usersDeck[i + 2].dataset.suit
            ) {
            const suit = usersDeck[i].dataset.suit;
            const value = parseInt(usersDeck[i].dataset.number);
            
            usersDeck[i].classList.add = "grouped";
            usersDeck[i].dataset.grouped = "thing";
            usersDeck[i + 1].classList.add = "grouped";
            usersDeck[i + 1].dataset.grouped = "thing";
            usersDeck[i + 2].classList.add = "grouped";
            usersDeck[i + 2].dataset.grouped = "thing";

            if (
                usersDeck[i].dataset.suit === usersDeck[i + 1].dataset.suit &&
                usersDeck[i].dataset.suit === usersDeck[i + 2].dataset.suit
            ) {

            }
        } else if (     //ignores suit, checks if same number
            !(i >= 9) &&
            usersDeck[i].dataset.number === usersDeck[i + 1].dataset.number &&
            usersDeck[i].dataset.number === usersDeck[i + 2].dataset.number
            ) {   //if same number
                console.log("same number")
        } else {
            deadwood += parseInt(usersDeck[i].dataset.number)
        }
    }

    usersDeadwood = deadwood;
}


/*
    usersDeck[10].classList.add = "grouped";
    usersDeck[10].dataset.grouped = "thing";
    console.log(usersDeck[0]);
    parseInt(usersDeck[0].dataset.number)
*/