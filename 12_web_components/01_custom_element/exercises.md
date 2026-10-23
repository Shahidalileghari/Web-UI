# Exercises — Web Components and Custom Elements

class InfoCard extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;

    const root = this.attachShadow({ mode: "open" });
    const article = document.createElement("article");
    const heading = document.createElement("h2");
    const detail = document.createElement("p");
    const tone = this.getAttribute("tone") || "blue";

    article.className = `card ${["blue", "green", "violet"].includes(tone) ? tone : "blue"}`;
    heading.textContent = this.getAttribute("heading") || "Untitled";
    detail.textContent = this.getAttribute("detail") || "";
    article.append(heading, detail);

    const style = document.createElement("style");
    style.textContent = `
      :host { display: block; min-width: 0; }
      .card { height: 100%; padding: 1.25rem; border: 1px solid #dce4f0; border-radius: 1rem; background: white; }
      .card::before { content: ""; display: block; width: 2.5rem; height: .35rem; border-radius: 1rem; background: var(--tone); }
      .blue { --tone: #155eef; } .green { --tone: #16835b; } .violet { --tone: #7b4bd1; }
      h2 { font: 700 1.2rem/1.3 system-ui, sans-serif; color: #182033; }
      p { font: 400 1rem/1.65 system-ui, sans-serif; color: #53627a; }
    `;
    root.append(style, article);
  }
}
customElements.define("info-card", InfoCard);


## Review questions
- What is the core browser concept in this lesson?
- Which accessibility or responsive edge case did you test?
- What would you change before shipping this component?
