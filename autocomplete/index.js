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

  const relaventSuggestions = popularSearches.filter((search) =>
    search.toLowerCase().includes(input)
  );

  if (relaventSuggestions.length > 0) {
    console.log(relaventSuggestions);
  } else {
    console.log('no suggestions!');
  }
}

function displaySuggestions(suggestions) {
  let displays = [];
  for (let i = 0; i < 5; i++) {
    if (!suggestions[i]) return;
    const display = `<div className="suggestion">
      <span>${suggestions[i]}</span>
    </div>`;
    displays.push(display);
  }
  console.log(displays.join(''));
  dropdownEl.insertAdjacentHTML('afterbegin', displays.join(''));
  // create containers for the suggested text
  // append html
}

displaySuggestions(popularSearches);

form.addEventListener('input', handleInput);
