const countOutput = document.querySelector("#count");
let count = 0;

function renderCount() {
  countOutput.textContent = String(count);
}

document.querySelector("#increase").addEventListener("click", () => {
  count += 1;
  renderCount();
});

document.querySelector("#decrease").addEventListener("click", () => {
  count -= 1;
  renderCount();
});

document.querySelector("#reset").addEventListener("click", () => {
  count = 0;
  renderCount();
});

document.querySelector("#theme-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const dark = document.body.dataset.theme !== "dark";
  document.body.dataset.theme = dark ? "dark" : "light";
  button.setAttribute("aria-pressed", String(dark));
});
