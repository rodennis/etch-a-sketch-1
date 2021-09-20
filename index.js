/**first prompt*/

/**const grid = prompt("Choose your grid size. (16 - 100")*/
    
const gridSize = document.querySelector("#gridsize");
const submit = document.querySelector("#submit");
submit.addEventListener('click', function() {
   startRound()
  })

  function startRound (){

  /**statement for finding the size of the actual grid depending on users input */

const body = document.querySelector("#body")
const container = document.querySelector("#container");
    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 2fr)`;
    body.appendChild(container)

  /**for loop for creating the # of divs for the gridsize */

for (let i = 0; i < gridSize ** 2; i++) {
    const div = document.createElement("div");
    div.classList.add("sketch")
    container.appendChild(div);
    div.addEventListener("mouseover", function( event ) {
        event.target.style.cssText = "background-color: black";
})
}
  }
