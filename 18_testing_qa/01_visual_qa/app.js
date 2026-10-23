const form = document.querySelector("#qa-checks");
const progress = document.querySelector("#progress");

function updateProgress() {
  const checks = [...form.querySelectorAll("input")];
  const done = checks.filter((check) => check.checked).length;
  progress.textContent = `${done}/${checks.length} QA checks completed.`;
}
form.addEventListener("change", updateProgress);
updateProgress();
