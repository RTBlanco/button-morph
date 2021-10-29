"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const buttonsDiv = document.getElementById('buttons');
    const rightDiv = document.getElementById("right");
    const leftDiv = document.getElementById("left");
    const state = {
        split: true
    };
    rightDiv.addEventListener('click', () => animate(state, rightDiv, leftDiv));
    leftDiv.addEventListener('click', () => animate(state, rightDiv, leftDiv));
});
function animate(state, rightDiv, leftDiv) {
    if (state.split) {
        rightDiv.setAttribute('style', "transform: translate(-50%); justify-content: center;");
        leftDiv.setAttribute('style', "transform: translate(50%); justify-content: center;");
        rightDiv.childNodes[0].textContent = "SAVE";
        leftDiv.childNodes[0].textContent = "DELETE";
    }
    else {
        rightDiv.setAttribute('style', "transform: translate(0%);");
        leftDiv.setAttribute('style', "transform: translate(0%);");
        rightDiv.childNodes[0].textContent = 'ED';
        leftDiv.childNodes[0].textContent = "IT";
        // rightDiv.style = "transform: translate(0%);"
        // leftDiv.style = "transform: translate(0%);"
    }
    state.split = !state.split;
}
function centerText(div) {
    div.setAttribute("style", "justify-content: center;");
}
