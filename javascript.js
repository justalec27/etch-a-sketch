function checkLimit(input){
    while (input >= 100 || input < 1){
        alert("The number should be less than 100.");
        input = Number(prompt("How many squares per side do you want? Enter a number from 1 to 99"));
    }
    return input 
}

//Create new grid
function createGrid(input){
    container.textContent = ""; //Delete old grid

    let numberOfBoxes = input * input;
    for ( let i = 0; i < numberOfBoxes; i++){
    let squares = document.createElement("div");
    squares.classList.add("square");
    container.appendChild(squares);
    }
    //Change background color with hover
    let colorBoxes = document.querySelectorAll(".square")

    colorBoxes.forEach((box) => {
    box.addEventListener("mouseover", (event) => {
        box.style.backgroundColor = "black"
    })
}) 
}


function resizeBoxes(){
    const newBoxes = document.querySelectorAll(".square")
    newBoxes.forEach((box) => {
        let boxSize = ((732 / userInput) - 2) + "px";
        console.log (boxSize)
        box.style.height = boxSize
        box.style.width = boxSize
     })  
}



const container = document.querySelector(".container")

//Create 16x16 grid
for ( let i = 0 ; i < 256 ; i++){
    let newBox = document.createElement("div")
    newBox.classList.add("square")
    container.appendChild(newBox)
    }


//Change background color with hover
let colorBoxes = document.querySelectorAll(".square")

colorBoxes.forEach((box) => {
    box.addEventListener("mouseover", (event) => {
        box.style.backgroundColor = "black"
    })
}) 

//Popup screen when button clicked
const button = document.querySelector("button")
button.classList.add("button")
button.addEventListener("click", (event) => {
    userInput = Number(prompt("How many squares per side do you want? Enter a number from 1 to 99"))
    userInput = checkLimit(userInput);
    createGrid(userInput);
    resizeBoxes()
   
})


//Hover effect on button
button.addEventListener("mouseover", (event) => {
  button.style.backgroundColor = "rgba(62, 184, 236, 1)";
  button.style.boxShadow = "10px 10px 15px rgba(0, 0, 0, 0.3)";
});
button.addEventListener("mouseout", (event) => {
  button.style.backgroundColor = "black";
  button.style.boxShadow = "none";
});

