var randomno1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomdiceImage = "dice" + randomno1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomdiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);

//for 2nd dice

var randomno2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomdiceImage2 = "dice" + randomno2 + ".png"; //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomdiceImage2; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource2);


if(randomno1 > randomno2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if(randomno2 > randomno1){
    document.querySelector("h1").innerHTML = "🚩Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "🚩Draw!!!";
}