/*
TODO 1: Change hover to click DONE
TODO 2: Add button for black color DONE
TODO 3: Add button for random color DONE
TODO 4: Add button to clear values DONE
TODO 5: Add slidebar for grid size
TODO 6: Add button to change to white color skip


*///



function checkLimit(input){
    while (input >= 100 || input < 1){
        alert("The number should be less than 100.");
        input = Number(prompt("How many squares per side do you want? Enter a number from 1 to 99"));
    }
    return input 
}
// Color the boxes
function attachColoring() {
  let colorBoxes = document.querySelectorAll(".square");

  colorBoxes.forEach((box) => {
    box.addEventListener("mousedown", () => isDragging = true);
    box.addEventListener("mousemove", () => {
      if (isDragging) { 
        box.style.backgroundColor = blackColor ? "black" : random_rgba();
      }
    });
    box.addEventListener("mouseup", () => isDragging = false);
  });
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
    attachColoring(); // reattach events to new squares
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

function random_rgba() {
    let r = Math.floor ((Math.random()) * 255)
    let b = Math.floor ((Math.random()) * 255)
    let g = Math.floor ((Math.random()) * 255)
    return `rgba(${r}, ${g}, ${b}, 1)`
}


const container = document.querySelector(".container")

//Create 16x16 grid
for ( let i = 0 ; i < 256 ; i++){
    let newBox = document.createElement("div")
    newBox.classList.add("square")
    container.appendChild(newBox)
    }


//Change background color with hover
let colorBoxes = document.querySelectorAll(".square");
let isDragging = false;
let blackColor = false

colorBoxes.forEach((box) => {
    box.addEventListener("mousedown", (event) => {
    isDragging = true
    })
})


colorBoxes.forEach((box) => {
    box.addEventListener("mousemove", (event) => {
        if (isDragging) { 
            if (blackColor === false) {
             box.style.backgroundColor = random_rgba();
            } else {
             box.style.backgroundColor = "black"
            }
        }
    })
}) 

colorBoxes.forEach((box) => {
    box.addEventListener("mouseup", (event) => {
        isDragging = false
        }) 
    })

// Click "Black Mode" button to change color to black
const blackBtn = document.querySelector(".blackBtn")
blackBtn.addEventListener("click", (event) => {
     blackColor = true
})

// Click "Rainbow Mode" button to change color to rainbow
const rainbowBtn = document.querySelector(".rainbowBtn")
rainbowBtn.addEventListener("click", (event) => {
     blackColor = false
})

// Click "Clear" button to clear the screen
const clearBtn = document.querySelector(".clearBtn")
clearBtn.addEventListener("click", (event) => {
     document.querySelectorAll(".square").forEach((box) => {
     box.style.backgroundColor = "white";
})
})

// Slide for Grid Size
const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
value.textContent = `${input.value} x ${input.value}`
input.addEventListener("input", (event) => {
    const size = event.target.value;
    value.textContent = `${size} x ${size}`;

    userInput = size; // store current size globally
    createGrid(userInput);
    resizeBoxes();

});

random_rgba()