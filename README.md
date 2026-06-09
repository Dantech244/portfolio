# 🟢 PORTFOLIO.OS

PORTFOLIO.OS is an interactive, multi-page personal portfolio styled as a retro terminal operating system. It allows visitors to explore my academic background, ongoing tech projects, skills, and future ambitions through a responsive command-line inspired interface.

<p align="center">
  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" alt="PORTFOLIO.OS Preview" width="100%">
</p>

---

## 🔗 Try It Out

### 🚀 [**Live Demo: Open PORTFOLIO.OS in your browser**](https://dantech244.github.io/portfolio/)

---

## ⚡ Quick Start

To explore this project, you don't need to install anything:
1. **Click the Live Demo link above** to boot into the terminal interface.
2. Use the top navigation bar to switch between the different modules (`Current`, `Future`, `Projects`).
3. Use the dynamic control panel to translate the interface or swap themes instantly.

---

## 🕹️ Key Features

* **Multilingual Core Engine:** Full instant translation array supporting 5 languages: French, English, Español, Deutsch, and Русский.
* **Dynamic Style & Theme Toggler:** Switch look and feel on the fly between Cyberpunk, Matrix, Classic Retro, Business, and Minimalist modes, plus a dedicated Dark/Light mode toggle.
* **Modular Multi-page Workspace:** Clear structural separation with tabs for current training (`actuel.html`), professional goals (`futur.html`), and full projects showcase (`projets.html`).

---

## 🛠️ How It Works (Technical Choices)

Instead of relying on heavy frameworks like React or Next.js, this project is built entirely using **Vanilla HTML5, CSS3, and JavaScript (ES6)** to keep loading times near instantaneous (under 100ms).

* **The Theme Engine:** Leverages **CSS Custom Properties (Variables)** mapped to the `:root` element. When a user clicks a theme, JavaScript updates the dataset attributes, instantly swapping the color palette globally without reloading the page.
* **The Translation System:** Powered by a localized JSON-like JavaScript object map. Elements containing `data-i18n` attributes are dynamically targetted and updated in the DOM when a language switch event is triggered.

---
