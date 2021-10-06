const submit = document.getElementById("submit");

submit.addEventListener('click' , () => {

  const gridSize = document.getElementById("gridsize").value;

/**statement for finding the size of the actual grid depending on users input */

    const container = document.querySelector("#container");
    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 4fr)`;
    

/**for loop for creating the # of divs for the gridsize */

for (let i = 0; i < gridSize ** 2; i++) {
    const div = document.createElement("div");
    div.classList.add("sketch")
    container.appendChild(div);
    div.addEventListener("mouseover", function(e) {
        e.target.style.cssText = "background-color: black";
})
}
}) 

