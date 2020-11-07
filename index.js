var RandomNumber1 = Math.floor(Math.random() * 6) + 1;

var RandomDiceImg1 = "dice" + RandomNumber1 + ".png";

var Randomimg1 = "images/"+ RandomDiceImg1;

var elementSelect = document.querySelectorAll("img")[0];

elementSelect.setAttribute("src", Randomimg1);


var RandomNumber2 = Math.floor(Math.random()* 6) + 1;

var RandomDiceImg2 = "images/dice" + RandomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", RandomDiceImg2);


if (RandomNumber1 > RandomNumber2) {
    document.querySelector("h1").innerHTML= "--Player 1 Wins!";
} else if (RandomNumber2 > RandomNumber1) {
    document.querySelector("h1").innerHTML= "Player 2 Wins!--";
} else{
    document.querySelector("h1").innerHTML= "Tie! You Both Win";
}