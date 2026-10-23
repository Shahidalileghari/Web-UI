# Exercises — Container Queries and Advanced CSS

:root { font-family: system-ui, sans-serif; color: #172033; background: #f3f6fb; }
* { box-sizing: border-box; }
body { margin: 0; }
.page { width: min(72rem, calc(100% - 2rem)); margin: auto; padding-block: 3rem; }
.eyebrow { color: #155eef; font-weight: 800; text-transform: uppercase; letter-spacing: .1em; }
h1 { font-size: clamp(2.3rem, 6vw, 4.3rem); max-width: 16ch; letter-spacing: -.05em; }
.examples { display: grid; grid-template-columns: 1fr; gap: 1rem; }
.slot { min-width: 0; padding: 1rem; border: 1px dashed #aab6c8; border-radius: 1rem; background: #eaf0fa; container-type: inline-size; }
.profile-card { display: flex; flex-direction: column; gap: 1rem; padding: 1rem; border-radius: .9rem; background: white; border: 1px solid #dfe6f0; }
.avatar { display: grid; place-items: center; width: 3.5rem; aspect-ratio: 1; border-radius: 50%; background: #dce7ff; color: #1747a8; font-weight: 850; }
p { color: #53627a; line-height: 1.6; }
a { color: #155eef; font-weight: 750; }
@container (min-width: 28rem) { .profile-card { flex-direction: row; align-items: center; } .profile-card h3 { margin-top: 0; } }
@media (min-width: 54rem) { .examples { grid-template-columns: minmax(15rem, .7fr) minmax(0, 1.3fr); align-items: start; } }


## Review questions
- What is the core browser concept in this lesson?
- Which accessibility or responsive edge case did you test?
- What would you change before shipping this component?
