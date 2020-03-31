//RGB Color Guessing Game
//from Colt Steele's Web Developer Bootcamp
//Converted to ES6 syntax by
//Jacob Stordahl / jacobstordahl.net


//color functions

const pickColor = () => {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
const generateRandomColors = (num) => {
  let arr = []
  for(let i = 0; i < num; i++){
    arr.push(randomColor())
  }
  return arr;
}

//global variables

let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let squares = document.getElementsByClassName('square');
let messageDisplay = document.getElementById('message');
let h1 = document.getElementById('title');
let resetButton = document.getElementById('reset');
let modeBtns = document.getElementsByClassName('mode');
let cont = document.getElementById('container');
let titleCont = document.getElementById('title-cont');

colorDisplay.textContent = pickedColor;

//difficulty selection

for(let i = 0; i < modeBtns.length; i++){
  modeBtns[i].addEventListener('click', function(){
    modeBtns[0].classList.remove('selected');
    modeBtns[1].classList.remove('selected');
    this.classList.add('selected');
    this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
    reset();
  });
}

//game reset

function reset(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  titleCont.style.backgroundColor = "";
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else{ squares[i].style.display = "none"; }
  }
}
resetButton.addEventListener("click", ()=>{
  reset();
});

//Main Gameplay Alg

for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', function(){
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
      changeColors(clickedColor);
      titleCont.style.backgroundColor = clickedColor;
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
    } else{
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

//Other Functions

const changeColors = color => {
  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function randomColor(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r  + ", " + g + ", " + b + ")";
}
