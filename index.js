const container = document.querySelector("#container");
const gridSize = prompt("Choose your grid size. (16 - 100")

for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("sketch")
    container.appendChild(div);
    div.addEventListener("mouseover", function( event ) {
        event.target.style.cssText = "background-color: black";
})
}


  