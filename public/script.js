// Variables 
const textInput = document.querySelector("textarea")
const voice = document.querySelector("#voice")
const lang = document.querySelector("#language")

const bt = document.querySelector("button")

// speak the text
bt.addEventListener('click', () => {
  let utternace = new SpeechSynthesisUtterance(textInput.value)
  speechSynthesis.speak(utternace)
})
