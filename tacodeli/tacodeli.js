function sideMenu(menu) {
  if (!(menu instanceof Element)) {
    throw new Error('No menu passed in');
  }
  const hamburgerEl = document.querySelector('.hamburger');
  const closeEl = menu.querySelector('.close');

  function openSideMenu() {
    menu.classList.remove('hide');
  }

  function closeSideMenu() {
    menu.classList.add('hide');
  }

  function handleKeyUp(e) {
    if (e.key !== 'Enter') return;
    if (e.target === hamburgerEl) openSideMenu();
    if (e.target === closeEl) closeSideMenu();
  }

  hamburgerEl.addEventListener('click', openSideMenu);
  closeEl.addEventListener('click', closeSideMenu);
  hamburgerEl.addEventListener('keyup', handleKeyUp);
  closeEl.addEventListener('keyup', handleKeyUp);
}

sideMenu(document.querySelector('.mobile_menu'));
