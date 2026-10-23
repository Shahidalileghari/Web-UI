const checklist = document.querySelector(".checklist");
const summary = document.querySelector("#summary");

function updateSummary() {
  const checks = [...checklist.querySelectorAll("input[type=checkbox]")];
  const complete = checks.filter((input) => input.checked).length;
  summary.textContent = `${complete} of ${checks.length} checks verified.`;
}

checklist.addEventListener("change", updateSummary);
updateSummary();
