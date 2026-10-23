# Exercises — Transitions, Animation, and Reduced Motion

:root { font-family: system-ui, sans-serif; color: #172033; background: #f3f6fb; }
* { box-sizing: border-box; }
body { margin: 0; }
.page { width: min(68rem, calc(100% - 2rem)); margin: auto; padding-block: 3rem; }
.eyebrow { color: #155eef; text-transform: uppercase; letter-spacing: .1em; font-weight: 800; }
h1 { font-size: clamp(2.5rem, 7vw, 4.5rem); letter-spacing: -.05em; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr)); gap: 1rem; margin-top: 2rem; }
.motion-card { text-align: left; display: grid; gap: .7rem; min-height: 12rem; padding: 1.4rem; border: 1px solid #dce4f0; border-radius: 1rem; background: white; color: inherit; font: inherit; cursor: pointer; transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease; }
.motion-card span { color: #155eef; font-weight: 800; }
.motion-card small { color: #53627a; line-height: 1.5; }
@media (hover: hover) and (prefers-reduced-motion: no-preference) { .motion-card:hover { transform: translateY(-4px); box-shadow: 0 1rem 2rem #1d2d4a12; border-color: #9cb8ff; } }
.motion-card:focus-visible { outline: 3px solid #e18b00; outline-offset: 4px; }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; } }


## Review questions
- What is the core browser concept in this lesson?
- Which accessibility or responsive edge case did you test?
- What would you change before shipping this component?
