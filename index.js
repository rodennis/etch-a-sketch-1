const submit = document.getElementById("submit");
const reset = document.getElementById('reset');
const color = document.getElementById('color')

submit.addEventListener('click' , () => {

  document.querySelectorAll(".sketch").forEach(e => e.remove())
  const gridSize = document.getElementById("gridsize").value;

  if (gridSize < 10 || gridSize > 100) {
       throw new Error("Stop script")
}

/**statement for finding the size of the actual grid depending on users input */

    const container = document.querySelector("#container");
    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 4fr)`;
    
/**for loop for creating the # of divs for the gridsize */

for (let i = 0; i < gridSize ** 2; i++) {
    const div = document.createElement("div");
    div.classList.add("sketch")
    container.appendChild(div);
    div.addEventListener("mouseover", function(e) {
        e.target.style.cssText = "background-color: black"
    })
    }

}) 

color.addEventListener('click' , () => {

    document.querySelectorAll(".sketch").forEach(e => e.remove());
    const gridSize = document.getElementById("gridsize").value;
  
    if (gridSize < 10 || gridSize > 100) {
         throw new Error("Stop script")
  }
  
  /**statement for finding the size of the actual grid depending on users input */
  
      const container = document.querySelector("#container");
      container.style.cssText = `grid-template-columns: repeat(${gridSize}, 4fr)`;
      
  /**for loop for creating the # of divs for the gridsize */
  
  for (let i = 0; i < gridSize ** 2; i++) {
      const div = document.createElement("div");
      div.classList.add("sketch")
      container.appendChild(div);
      div.addEventListener("mouseover", function(e) {
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }
          e.target.style.backgroundColor = getRandomColor()
      })
      }
  
  }) 

reset.addEventListener('click', () => {
    const container = document.querySelector("#container");
    document.querySelectorAll(".sketch").forEach(e => e.remove());
    const gridSize = document.getElementById("gridsize").value = ''
})

