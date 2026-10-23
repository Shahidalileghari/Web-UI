const courses = [
  { title: "Semantic HTML", level: "Beginner", duration: 2 },
  { title: "CSS Grid Systems", level: "Intermediate", duration: 3 },
  { title: "Accessible UI Engineering", level: "Advanced", duration: 4 },
  { title: "Modern JavaScript Events", level: "Intermediate", duration: 3 },
  { title: "Responsive Foundations", level: "Beginner", duration: 2 },
];

const search = document.querySelector("#search");
const level = document.querySelector("#level");
const sort = document.querySelector("#sort");
const catalog = document.querySelector("#catalog");
const resultCount = document.querySelector("#result-count");

function render() {
  const query = search.value.trim().toLowerCase();
  const chosenLevel = level.value;
  const visible = courses
    .filter((course) => course.title.toLowerCase().includes(query))
    .filter((course) => chosenLevel === "all" || course.level === chosenLevel)
    .sort((a, b) => sort.value === "duration"
      ? a.duration - b.duration
      : a.title.localeCompare(b.title));

  catalog.replaceChildren();
  resultCount.textContent = `${visible.length} course${visible.length === 1 ? "" : "s"} found`;

  if (visible.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No courses match. Try another search or level.";
    catalog.append(empty);
    return;
  }

  for (const course of visible) {
    const card = document.createElement("article");
    card.className = "course";
    const title = document.createElement("h2");
    const meta = document.createElement("small");
    title.textContent = course.title;
    meta.textContent = `${course.level} · ${course.duration} hours`;
    card.append(title, meta);
    catalog.append(card);
  }
}

[search, level, sort].forEach((control) => control.addEventListener("input", render));
render();
