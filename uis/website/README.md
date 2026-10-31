# TrackFlow — Public Website (Milestone 1)

The company's public-facing web presence, built for **TrackFlow** (last-mile delivery
and warehouse management, operating in the US and Spain).

> Based on [`Milestone_1_context.md`](../../Milestone_1_context.md) — Product owner: **Miguel Torres** (Commercial Director).

## Pages

| File               | Purpose                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------- |
| `index.html`       | Landing page (Header, Hero, Services, Coverage, Why TrackFlow, Contact, Footer + Schema.org) |
| `application.html` | Information-request / sign-up form with full client-side validation                          |
| `validation.js`    | Validation logic for the form (no backend; submit is simulated)                              |
| `styles.css`       | Optional small complement to the Tailwind CDN                                                |

## Tech

- **Tailwind CSS** (CDN) for all styling — responsive, mobile-to-desktop.
- **Vanilla JavaScript** for validation — no build step, no dependencies.
- **Accessible**: semantic HTML, ARIA (`alert`, `dialog`, `radiogroup`, `aria-invalid`), skip links.
- **SEO**: descriptive title/meta + **Schema.org Organization** JSON-LD on `index.html`.

## Run it locally (Codespaces-compatible)

From the repository root, serve just the website folder:

```bash
npx http-server uis/website -p 3000 -a 0.0.0.0
```

Then open:

- Landing page → `http://localhost:3000/`
- Application form → `http://localhost:3000/application.html`

Port `3000` is already forwarded in `.devcontainer/deviconainer.json` (`forwardPorts`).
Alternatively, from inside this folder:

```bash
python3 -m http.server 3000
```

## Form behaviour (per the brief)

- All fields validated **before** simulated submission.
- Exact error messages from `Milestone_1_context.md` are displayed inline.
- Comments limited to 500 chars with a visible live counter.
- If "0–100 shipments/month" is selected (with a product type), a warning asks for confirmation.
- On success, the exact success message from the brief is shown (submission is simulated, nothing is sent).
