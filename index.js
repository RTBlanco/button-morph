document.addEventListener("DOMContentLoaded", () => {
  const buttonsDiv = document.getElementById('buttons')
  // const middleDiv = document.getElementById('middle')
  const rightDiv = document.getElementById("right");
  const leftDiv = document.getElementById("left");

  const state = {
    split: false
  }

  rightDiv.addEventListener('click', (e) => {
    if (state.split) {
      rightDiv.style = "transform: translate(-50%);"
      leftDiv.style = "transform: translate(50%);"  
    } else {
      rightDiv.style = "transform: translate(0%);"
      leftDiv.style = "transform: translate(0%);"
    }
    state.split = !state.split
  })
})