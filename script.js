console.clear();
const featuresEl = document.body;
const featureEls = document.querySelectorAll(".container-border");

featuresEl.addEventListener("pointermove", (ev) => {
  featureEls.forEach((featureEl) => {
    const rect = featureEl.getBoundingClientRect();
    const x = Math.max(0, ev.clientX - rect.left);
    const y = Math.max(0, ev.clientY - rect.top);

    featureEl.style.setProperty("--x", x);
    featureEl.style.setProperty("--y", y);
  });
});
