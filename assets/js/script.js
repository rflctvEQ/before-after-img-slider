let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let red = document.querySelector(".pic2");
let media = window.matchMedia("(max-width: 900px)");


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    red.style.width = this.value + "%";
    // output.innerHTML = this.value;
}

function mediaQuery() {
    if (media.matches) {
        slider.setAttribute("max", "80");
    } else {
        slider.setAttribute("max", "66");
    }
};
mediaQuery();
media.addListener(mediaQuery);