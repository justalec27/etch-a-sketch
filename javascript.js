const container = document.querySelector(".container")
// container.addEventListener("mouseover", (event) => {
//     container.style.backgroundColor = "red"
// })

for ( let i = 0 ; i < 256 ; i++){
    let newBox = document.createElement("div")
    newBox.classList.add("square")
    container.appendChild(newBox)
    }



let colorBoxes = document.querySelectorAll(".square")

colorBoxes.forEach((box) => {
    box.addEventListener("mouseover", (event) => {
        box.style.backgroundColor = "black"
    box.addEventListener("mouseleave", (event) => {
        box.style.backgroundColor = "white"
         })
    })
})   




// //Create element example
// const para = document.createElement("p")
// const node = document.createTextNode("This is a textnode.")
// container.appendChild(para)
// para.appendChild(node)