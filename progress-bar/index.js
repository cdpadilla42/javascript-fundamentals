const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

function progressBar(percent) {
  const bar = document.querySelector('.progress');
  const progressAmountDisplay = bar.querySelector('.positive');
  progressAmountDisplay.style = `flex-basis: ${percent}%`;
}

progressBar(50);

async function progressOverTime() {
  for (let i = 0; i <= 100; i++) {
    progressBar(i);
    await wait(30);
  }
}
