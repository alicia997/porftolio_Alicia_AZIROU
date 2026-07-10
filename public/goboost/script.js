const loader = document.getElementById("loader");
const iframe = document.getElementById("figmaPrototype");
const fullscreenButton = document.getElementById("fullscreenButton");

iframe.addEventListener("load", () => {
  if (loader) {
    loader.style.display = "none";
  }
});

fullscreenButton.addEventListener("click", async () => {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen();
  } else {
    await document.exitFullscreen();
  }
});
