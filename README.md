<div align="center">

# LifeOS

**A focused planning workspace that turns a busy week into clear next steps.**

![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F0DB4F?style=flat-square&logo=javascript&logoColor=111111)
![Interface](https://img.shields.io/badge/Interface-Desktop_Focused-5B5CE2?style=flat-square)
![Status](https://img.shields.io/badge/Status-Portfolio_Concept-18181B?style=flat-square)

</div>

---

## Product story

LifeOS explores a calmer way to manage daily execution and weekly planning. Tasks, schedule pressure, progress feedback, and rescheduling decisions live inside one information-dense workspace without requiring a build system or production account.

| Focus | Contribution | Result |
| --- | --- | --- |
| Make a dense planner feel focused and actionable | Interface design, HTML/CSS/JavaScript implementation, interaction states, motion, accessibility, and documentation | A self-contained planning demonstration with connected Today, Week, progress, and preference states |

## Interface preview

| Today view | Weekly planning |
| --- | --- |
| ![LifeOS Today view](docs/screenshots/overview-desktop.png) | ![LifeOS weekly planning view](docs/screenshots/week-desktop.png) |

## Experience highlights

- Daily and weekly planning views
- Task creation, editing, completion, and rescheduling interactions
- Progress, workload, and projection feedback
- Theme preference stored locally in the browser
- Keyboard-accessible dialogs and explicit unavailable-feature messaging
- Reduced-motion support for users who request it

## Design and engineering

- The project is intentionally self-contained in <code>index.html</code> for quick review without a build step.
- Browser-local state and deterministic demonstration data keep the experience safe to explore.
- The layout prioritizes dense desktop planning workflows, with clear messaging on smaller screens.
- Automated integrity tests cover required semantics, identifier uniqueness, and portfolio-language constraints.

## Technology

Semantic HTML · CSS custom properties · Vanilla JavaScript · Browser local storage · Node test runner

## Run locally

Serve <code>index.html</code> with any local static server:

~~~bash
npx serve .
~~~

## Quality checks

~~~bash
npm test
~~~

GitHub Actions runs the integrity checks for every pushed branch and pull request.

## Project note

> LifeOS is a front-end portfolio demonstration. Tasks and settings remain local to the browser and are not synchronized with a production account.

## Assets and usage

See [ASSETS.md](ASSETS.md) for asset notes and [LICENSE](LICENSE) for reuse terms.
