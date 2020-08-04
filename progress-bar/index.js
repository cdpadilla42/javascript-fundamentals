const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

function progressBar(percent) {
  const bar = document.querySelector('.progress');
  const progressAmountDisplay = bar.querySelector('.positive');
  progressAmountDisplay.style = `flex-basis: ${percent}%`;
}

progressBar(50);

function progressOverTime(seconds) {
  let atPercent = 0;
  const interval = setInterval(() => {
    if (atPercent >= 100) clearInterval(interval);
    progressBar(atPercent);
    atPercent++;
    console.log(atPercent);
  }, (seconds * 1000) / 100);
}
