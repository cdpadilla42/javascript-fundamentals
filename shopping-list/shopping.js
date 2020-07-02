const shoppingForm = document.querySelector('[name="add_item_form"]');
const list = document.querySelector('.shopping_list');

let items = [];

function handleFormSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value.trim();
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  e.currentTarget.item.value = '';
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map((item) => {
      return `<li>
        <input type="checkbox" name="complete" id="complete" value="${item.id}"/>
        ${item.name}
        <button value="${item.id}">&times;</button>
      </li>`;
    })
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  window.localStorage.setItem('items', JSON.stringify(items));
}

function checkLocalStorage() {
  const myLocalStorage = JSON.parse(window.localStorage.getItem('items'));
  if (myLocalStorage.length) {
    items = myLocalStorage;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

shoppingForm.addEventListener('submit', handleFormSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

checkLocalStorage();
