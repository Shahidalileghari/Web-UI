# Exercises — UI Architecture and Reusable Patterns

:root { --brand: #155eef; --ink: #172033; --muted: #53627a; --line: #dfe6f0; --surface: #fff; font-family: system-ui, sans-serif; color: var(--ink); background: #f3f6fb; }
* { box-sizing: border-box; }
body { margin: 0; }
.page { width: min(72rem, calc(100% - 2rem)); margin: auto; padding-block: 3rem; }
.heading { max-width: 50rem; }
.eyebrow { color: var(--brand); text-transform: uppercase; letter-spacing: .1em; font-weight: 800; }
h1 { font-size: clamp(2.3rem, 6vw, 4.5rem); line-height: 1.04; letter-spacing: -.05em; }
.heading p:last-child, .card p { color: var(--muted); line-height: 1.7; }
.component-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr)); gap: 1rem; margin-top: 2rem; }
.card { display: flex; flex-direction: column; align-items: flex-start; gap: .7rem; background: var(--surface); border: 1px solid var(--line); border-radius: 1rem; padding: 1.4rem; }
.card h2, .card p { margin: 0; }
.badge { display: inline-block; border-radius: 2rem; background: #fff1d6; color: #774700; padding: .3rem .65rem; font-size: .8rem; font-weight: 800; }
.badge--done { background: #dff7eb; color: #08623f; }
.progress { width: 100%; height: .55rem; border-radius: 1rem; background: #e8edf5; overflow: hidden; }
.progress span { display: block; height: 100%; background: var(--brand); border-radius: inherit; }
button { margin-top: .4rem; border: 0; border-radius: .6rem; background: var(--brand); color: white; padding: .75rem 1rem; font: inherit; font-weight: 750; cursor: pointer; }
button.secondary { background: #e8efff; color: #1747a8; }
:focus-visible { outline: 3px solid #e18b00; outline-offset: 3px; }


## Review questions
- What is the core browser concept in this lesson?
- Which accessibility or responsive edge case did you test?
- What would you change before shipping this component?
