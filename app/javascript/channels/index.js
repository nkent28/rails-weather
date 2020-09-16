// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

const button = document.querySelector('.button')
const inputValue = document.querySelector('.inputValue')
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');

button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=4e88eaf5d49f3485b223efdf825fbfa1')
  .then(response => response.json())
  .then(data => console.log(data))

.catch(err => alert("Wrong city name!"))
})


