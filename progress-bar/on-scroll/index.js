const progressBar = document.querySelector('.progress_bar');
const progressFill = progressBar.querySelector('.progress_filler');

const ob = new IntersectionObserver(handleIntersectionObserver);

function handleIntersectionObserver(e) {
  // Window scroll Y - How far down the page the top of the browser is
  // Scroll Height - the height of the document
  // client height - the height of the view the client sees. Makes it so that when you make it to the bottom, it accounts for the height left over that the client sees
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const percentage = window.scrollY / height;
  const pixelValue = Math.floor(
    document.documentElement.clientWidth * percentage
  );
  console.log(pixelValue);

  // add percentage to bar
  progressFill.style.transform = `scaleX(${pixelValue})`;
}

document.addEventListener('scroll', handleIntersectionObserver);
