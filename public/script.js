// constant Variables 
const textInput = document.querySelector("textarea")
const voice = document.querySelector("#voice")
const lang = document.querySelector("#language")
const bt = document.querySelector("button")

// loading available voices
let voices = []
function loadVoices(){
  voices = speechSynthesis.getVoices()
  voice.innerHTML = voices
    .map((voice, index) => `<option value="${index}">${voice.name} (${voice.lang})</option>`)
    .join('')
}

//trigger load voices
speechSynthesis.onvoiceschanged = loadVoices
loadVoices()

// speak the text
bt.addEventListener('click', () => {
  let utternace = new SpeechSynthesisUtterance(textInput.value)
  let selectedVoice = voices[voice.value]
  if (selectedVoice) utternace.voice = selectedVoice
  speechSynthesis.speak(utternace)
})

