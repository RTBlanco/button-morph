window.addEventListener("DOMContentLoaded", () => {
  const buttonsDiv = document.getElementById('buttons')!
  const rightDiv = document.getElementById("right")!;
  const leftDiv = document.getElementById("left")!;



  const state: State = {
    split: false
  }

  rightDiv.addEventListener('click', () => animate(state, rightDiv, leftDiv))
  leftDiv.addEventListener('click', () => animate(state, rightDiv, leftDiv))
})


interface State {
  split: boolean
}

function animate(state: State, rightDiv: HTMLElement, leftDiv: HTMLElement): void {
  if (state.split) {
    rightDiv.setAttribute('style',"transform: translate(-50%);")
    leftDiv.setAttribute('style', "transform: translate(50%);" )
    // rightDiv.style = "transform: translate(-50%);"
    // leftDiv.style = "transform: translate(50%);"  
  } else {
    rightDiv.setAttribute('style',"transform: translate(0%);")
    leftDiv.setAttribute('style', "transform: translate(0%);" )
    // rightDiv.style = "transform: translate(0%);"
    // leftDiv.style = "transform: translate(0%);"
  }
  state.split = !state.split
}