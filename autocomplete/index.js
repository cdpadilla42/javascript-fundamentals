const popularSearches = [
  'How to deep fry cake',
  'How to juggle',
  'How to dance',
  'How to beat box',
  'How to microwave pizza',
];

const form = document.querySelector('form');
const dropdownEl = document.querySelector('.dropdown');

function handleInput(e) {
  const input = e.currentTarget.query.value.toLowerCase();
  if (input.length === 0) return dropdownEl.classList.add('hide');

  const relaventSuggestions = popularSearches.filter((search) =>
    search.toLowerCase().includes(input)
  );

  displaySuggestions(relaventSuggestions);
}

function displaySuggestions(suggestions) {
  if (suggestions.length === 0) return dropdownEl.classList.add('hide');
  dropdownEl.innerHTML = '';
  let displays = [];
  for (let i = 0; i < 5; i++) {
    if (!suggestions[i]) continue;
    const display = `<div class="suggestion">
      <span>${suggestions[i]}</span>
    </div>`;
    displays.push(display);
  }
  console.log(displays.join(''));
  dropdownEl.classList.remove('hide');
  dropdownEl.insertAdjacentHTML('afterbegin', displays.join(''));
}

form.addEventListener('input', handleInput);
