// Create a greeting / goodbye generator that stores functions into objects that can be called by their params later. Neatoooo!

console.log('hey');

const messageEl = document.querySelector('.message');
const inputs = Array.from(document.querySelectorAll('[type="radio"]'));

const possibleMessage = {
  greet() {
    return 'Hi!';
  },
  fairwell() {
    return 'Goodbye';
  },
  nasty() {
    return 'GO AWAY!!!';
  },
};

function showMessage(e) {
  messageEl.textContent = possibleMessage[e.currentTarget.value]();
}

inputs.forEach((input) => {
  input.addEventListener('input', showMessage);
});
