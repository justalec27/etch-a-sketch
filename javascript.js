const container = document.querySelector(".container")



for ( let i = 0 ; i < 256 ; i++){
    let newBox = document.createElement("div")
    newBox.classList.add("square")
    container.appendChild(newBox)
    }


    
    




// //Create element example
// const para = document.createElement("p")
// const node = document.createTextNode("This is a textnode.")
// container.appendChild(para)
// para.appendChild(node)