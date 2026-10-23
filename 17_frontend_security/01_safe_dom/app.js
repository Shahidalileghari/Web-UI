document.querySelector("#preview-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const value = document.querySelector("#user-text").value;
  document.querySelector("#preview").textContent = value;
});
