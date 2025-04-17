// constant Variables 
const textInput = document.querySelector("textarea")
const voice = document.querySelector("#voice")
const languages = document.querySelector("#language")
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

// languages
const languageList = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'zh-CN', name: 'Chinese (Simplified)' },
];

// populatee languages options
languageList.forEach(({code, name}) => {
  const option = document.createElement('option')
  option.value = code
  option.textContent = name
  languages.appendChild(option)
})

// speak the text
bt.addEventListener('click', () => {
  let utternace = new SpeechSynthesisUtterance(textInput.value)
  let selectedVoice = voices[voice.value]
  if (selectedVoice) utternace.voice = selectedVoice
  speechSynthesis.speak(utternace)
})

