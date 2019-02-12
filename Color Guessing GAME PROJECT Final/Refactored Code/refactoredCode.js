

// Created by Shivam on 23-01-2019.



// By default ,game will be at hard mode. so colors=6 , at easy , colors=3.
var number_of_colors=6;
var colors=generateColorArray(number_of_colors);


var pickedColor=pickRandomColor();
var divs=document.getElementsByClassName("square");

var picked_color_display=document.getElementById("pickedColor");
picked_color_display.textContent=pickedColor;

var status_display=document.getElementById("status");
var h1=document.querySelector("h1");

var reset_button=document.getElementById("reset");
var easy_button=document.getElementById("easyButton");
var hard_button=document.getElementById("hardButton");
var modeButtons=document.querySelectorAll(".mode");




init();


function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}



function setUpModeButtons() {
    for (var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            // modeButtons[i].classList.add("selected");
            this.classList.add("selected");
            this.textContent==="EASY" ? number_of_colors =3: number_of_colors=6;
            reset();
        });
    }
}

function setUpSquares() {
    for (var i=0;i<colors.length;i++){
        // Add colors to divs.
        divs[i].style.backgroundColor=colors[i];
        // Add event listener to each div.
        divs[i].addEventListener("click",function () {
            var clickedColor=this.style.backgroundColor;
            if (clickedColor===pickedColor) {
                status_display.textContent="Correct!";
                changeColor(clickedColor);
                h1.style.backgroundColor=clickedColor;
                //If player wins, change button text to "Play Again?"
                reset_button.textContent="Play again?"
            }
            else {
                this.style.backgroundColor="#232323";
                status_display.textContent="Try again :( ";
            }
        });
    }
}



function reset() {
    colors=generateColorArray(number_of_colors);
    pickedColor=pickRandomColor();
    picked_color_display.textContent=pickedColor;
    status_display.textContent="";
    reset_button.textContent="New Colors";
    h1.style.backgroundColor="steelblue";

    for (var i=0;i<divs.length;i++){

        // Now change color of divs;
        if (colors[i]) {
            divs[i].style.backgroundColor = colors[i];
            divs[i].style.display = "block";
        }
        // Now we have to hide the last 3 colors to show up only 3 colors.
        // We can do it using display property
        else
            divs[i].style.display="none";
    }
}
// Adding event Listner to our RESET BUTTON(New Color button).
reset_button.addEventListener("click",function () {
    reset();
});


function changeColor(color) {
    for (var i=0; i<divs.length; i++){
        divs[i].style.backgroundColor=color;
    }
}


function pickRandomColor() {
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}



// We have to generate random color array for different colors at each reload
function generateColorArray(num) {
    var array=[];
    for (var i=0;i<num;i++){
        // Now generate num time random color and add it array and at last return it.
        var red=String(Math.floor(Math.random()*256));
        var green=String(Math.floor(Math.random()*256));
        var blue=String(Math.floor(Math.random()*256));
        var final_color="rgb("+red+", "+green+", "+blue+")";
        array.push(final_color);
    }
    return array;
}




