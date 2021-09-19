const grid = prompt("Choose your grid size. (16 - 100")

const body = document.querySelector("#body")
const container = document.querySelector("#container");
    container.style.cssText = `grid-template-columns: repeat(${grid}, 2fr)`;
    body.appendChild(container)
    
    /** working on button and text input  */
/**const gridSize = document.querySelector("#gridsize");

const submit = document.querySelector("#submit");
submit.addEventListener('click', () => {

  });**/

for (let i = 0; i < grid ** 2; i++) {
    const div = document.createElement("div");
    div.classList.add("sketch")
    container.appendChild(div);
    div.addEventListener("mouseover", function( event ) {
        event.target.style.cssText = "background-color: black";
})
}