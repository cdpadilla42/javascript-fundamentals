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
        <input type="checkbox" name="complete" id="complete" value="${item.id}"
        ${item.complete ? 'checked' : ''}
        />
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

function deleteItem(id) {
  const newItems = items.filter((item) => item.id !== id);
  items = newItems;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markDone(id) {
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleFormSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
list.addEventListener('click', (e) => {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) deleteItem(id);
  if (e.target.matches('[type="checkbox"]')) markDone(id);
});

checkLocalStorage();
