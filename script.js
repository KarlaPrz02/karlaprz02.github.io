console.clear();
const featuresEl = document.body;
const featureEls = document.querySelectorAll(".container-border");

featuresEl.addEventListener("mousemove", (ev) => {
  console.log(ev)
  if (!ev.sourceCapabilities.firesTouchEvents) {
    featureEls.forEach((featureEl) => {
      const rect = featureEl.getBoundingClientRect();
      const x = Math.max(0, ev.clientX - rect.left);
      const y = Math.max(0, ev.clientY - rect.top);

      featureEl.style.setProperty("--x", x);
      featureEl.style.setProperty("--y", y);
    });
  }
});

featuresEl.addEventListener("mouseout", (ev) => {
  if (!ev.sourceCapabilities.firesTouchEvents) {
    featureEls.forEach((featureEl) => {
      featureEl.style.setProperty("--x", 0);
      featureEl.style.setProperty("--y", 0);
    });
  }
});
