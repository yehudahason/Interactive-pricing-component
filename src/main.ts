const slider = document.getElementById("slider") as HTMLInputElement | null;

function updateSlider() {
  if (slider) {
    const min = Number(slider.min);
    const max = Number(slider.max);
    const value = Number(slider.value);
    let percent = ((value - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(
      to right,
      hsl(174, 77%, 80%) 0%,
      hsl(174, 77%, 80%) ${percent}%,
      hsl(224, 65%, 95%) ${percent}%,
      hsl(224, 65%, 95%) 100%
    )`;

    console.log("update", percent);
  }
}

if (slider) {
  updateSlider();
  slider.addEventListener("input", updateSlider);
}
