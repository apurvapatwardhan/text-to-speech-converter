let speech = new SpeechSynthesisUtterance();

let option = document.querySelector('option');
let volume = document.querySelector('#vol');
let rate = document.querySelector('#rate');
let pitch = document.querySelector('#pitch');
let text = document.querySelector('.text');
let start = document.querySelector('button');

let voices = []; // global array

speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();
    console.log(voices)
  // Initially set the First Voice in the Array.
  speech.voice = voices[0];
    let opt1 = document.createElement('option');
    let opt2 = document.createElement('option');
    let opt3 = document.createElement('option');
    opt1.value = voices[1], opt1.innerText = voices[1].name;
    opt2.value = voices[2] ,opt2.innerText = voices[2].name;
    opt3.value = voices[3], opt3.innerText = voices[3].name;
    option.parentElement.append(opt1);
    option.parentElement.append(opt2);
    option.parentElement.append(opt3);
  // Set the Voice Select List. (Set the Index as the value, which we'll use later when the user updates the Voice using the Select Menu.)
  
};



start.addEventListener('click', function(e){
    speech.lang = 'en'
    speech.pitch = pitch.value;
    speech.rate = rate.value;
    speech.volume = volume.value;
    speech.lang = option.value;
    speech.text = text.value;
    speechSynthesis.speak(speech);
})
