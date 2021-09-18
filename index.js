const container = document.querySelector("#container");

for (let i = 0; i < 17; i++) {
    const div = document.createElement("div");
    div.classList.add("sketch")
    container.appendChild(div);
    div.addEventListener("mouseover", function( event ) {
        event.target.style.cssText = "background-color: black";
})

}

  