// Select elements
const hexaText = document.getElementById('color');
const button = document.getElementById('btn-color');

// Create a function 
function randomNumberGenerator () {
  const hexaDigits = '0123456789ABCDEF'
  let hexaColor = '#'

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16)
    hexaColor += hexaDigits[randomIndex]
  }

  return hexaColor
}

// Create a event listener
button.addEventListener('click', function () {
  const randomNumber = randomNumberGenerator();

  hexaText.innerText = randomNumber;
  document.body.style.backgroundColor = randomNumber;
});




