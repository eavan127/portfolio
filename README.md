# Eavan Tan, Portfolio

Personal portfolio site. Static HTML/CSS/JS, no build step, no dependencies,
no external scripts. Deploy by pointing GitHub Pages or Vercel at the repo root.

## Structure

```
index.html                      page shell, every section lives here
resources/styles.css            design system, 6 palettes x light/dark
resources/data.js               ALL CONTENT, edit this file
resources/script.js             section routing, renderers, theme + palette
resources/assets/docs/          resume PDF
resources/assets/hero/          put profile.jpg here
```

It is a single-page app: the nav swaps sections in and out rather than
scrolling. Home and My Expertise show together as the landing view.

## Editing content

Everything readable lives in `resources/data.js`. Add a project by appending an
object to `projects`; the card, its filter category and its links render
themselves.

- `repo: null` renders "Repository private"
- `live: null` renders "No live deployment"

Fields marked as rich text, `bio`, project `impact`, expertise `bullets` 
accept `<strong>` for emphasis. Every other field is escaped and shown as-is.

## Adding your photo

Save a portrait as `resources/assets/hero/profile.jpg` (4:5 crop, ~800x1000).
It fills both the hero arch and the navbar avatar. Until it exists, both fall
back to an "ET" monogram, nothing breaks.

## Colour

One palette, lifted from the two reference sites. No switcher.

| Token | Value | Source |
|-------|-------|--------|
| ground | `#080808` | tahahassan.vercel.app |
| bone / ivory | `#F1F0EC` | tahahassan.vercel.app |
| warm grey | `#D7D5CF` | tahahassan.vercel.app |
| clay accent | `#BD5D3F` | akwastaken.github.io (`--special-accent`) |

Dark is the default, matching those sites. The header toggle switches to light,
which inverts the same two colours, bone ground, near-black type. Everything
lives in the two token blocks at the top of `resources/styles.css`.

To use tahahassan's redder accent instead, change `--accent-secondary` to
`#EF4444` in both blocks. Nothing else moves.

## Typography

Two faces, both from Google Fonts:

- **Anton**, display only. Used for the hero name and section titles, nowhere
  else. It has a single weight; do not ask it for bold or italic.
- **Outfit**, everything else, weights 200-800.
- **JetBrains Mono**, dates and numeric metadata only.

Headings are real text in a real typeface. Do not substitute Unicode
"special text" characters (𝐄𝐚𝐯𝐚𝐧, ᴇᴀᴠᴀɴ): they break Ctrl+F, screen readers,
and recruiter ATS parsing, and they render inconsistently across platforms.

## Local preview

```bash
python -m http.server 5599
```
