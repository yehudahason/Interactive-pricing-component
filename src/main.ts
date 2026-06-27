const slider = document.getElementById("slider") as HTMLInputElement | null;
const price_amount = document.getElementById(
  "price_amount",
) as HTMLElement | null;

const checkboxEl = document.getElementById(
  "checkbox",
) as HTMLInputElement | null;
const pageviewsEl = document.getElementById("pageviews") as HTMLElement | null;

const monthlyValues = [4, 8, 16, 24, 36];
const yearlyValues = [3, 6, 12, 18, 27];
const pageviews = ["10K", "50K", "100K", "500K", "1M"];

function updateSlider() {
  if (!slider) return;
  if (!pageviewsEl) return;

  const min = Number(slider.min);
  const max = Number(slider.max);
  const value = Number(slider.value);

  const percent = ((value - min) / (max - min)) * 100;
  const arr = checkboxEl?.checked ? yearlyValues : monthlyValues;
  const price = arr[value];
  const views = pageviews[value];
  pageviewsEl.innerHTML = views + " PAGEVIEWS";

  if (price_amount) {
    price_amount.textContent = `$${price}`;
  }

  slider.style.background = `linear-gradient(
    to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${percent}%,
    hsl(224, 65%, 95%) ${percent}%,
    hsl(224, 65%, 95%) 100%
  )`;
}

if (slider) {
  updateSlider();

  slider.addEventListener("input", updateSlider);
  checkboxEl.addEventListener("change", updateSlider);
}
