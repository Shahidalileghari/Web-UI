const form = document.querySelector("#signup-form");
const status = document.querySelector("#form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  const formData = new FormData(form);
  const name = String(formData.get("fullName") ?? "").trim();

  // This lesson demonstrates UI feedback only; it does not send/store the form.
  status.textContent = `Thanks, ${name}. Your demo form passed browser validation.`;
  form.reset();
});
