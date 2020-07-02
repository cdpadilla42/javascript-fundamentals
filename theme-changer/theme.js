function themeChange(pageBody) {
  const darkButton = pageBody.querySelector('button.dark');
  const lightButton = pageBody.querySelector('button.light');

  function switchTheme(e) {
    if (e.currentTarget.matches('.light')) {
      return pageBody.classList.remove('dark_theme');
    }
    pageBody.classList.add('dark_theme');
  }

  darkButton.addEventListener('click', switchTheme);
  lightButton.addEventListener('click', switchTheme);
}

themeChange(document.body);
