const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const status = document.querySelector("#status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) return;

  const item = document.createElement("li");
  const label = document.createElement("span");
  const removeButton = document.createElement("button");
  label.textContent = value;
  removeButton.type = "button";
  removeButton.className = "remove";
  removeButton.textContent = "Remove";
  item.append(label, removeButton);
  list.append(item);
  input.value = "";
  input.focus();
  status.textContent = "Task added.";
});

list.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest("button.remove");
  if (!button || !list.contains(button)) return;
  button.closest("li")?.remove();
  status.textContent = "Task removed.";
});
