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
src/                            numbered section images
```

It is a single-page app: the nav swaps sections in and out rather than
scrolling. Home and My Expertise show together as the landing view.

## Editing content

Everything readable lives in `resources/data.js`. Add a project by appending an
object to `projects`; the card, its filter category and its links render
themselves.

Each project renders one button per link it actually has. Omit a field, or
set it to `null`, and that button simply does not appear:

| Field | Button |
|-------|--------|
| `live` + `liveLabel` | filled button, label of your choosing |
| `repo` | Repository |
| `deck` | Pitch deck |
| `video` | Demo video |

A project with none of them shows a single muted "Not publicly available".

Fields marked as rich text, `bio`, project `impact`, expertise `bullets` 
accept `<strong>` for emphasis. Every other field is escaped and shown as-is.

## Section images

Drop images in `src/`, numbered by the order the sections appear on the page:

| File | Section |
|------|---------|
| `src/session_title_1` | My Expertise |
| `src/session_title_2` | Projects |
| `src/session_title_3` | Skills |
| `src/session_title_4` | Experience |
| `src/session_title_5` | Awards and Honours |

Each slot tries `.jpg`, `.png`, `.webp`, then `.jpeg`, so any of those
extensions works. A missing file inserts nothing at all: no gap, no broken
icon, no layout shift.

They render as a wide band above the section title, cover-cropped to 21:6 on
desktop, so landscape images around 1600x460 or wider look best.

To point a number at a different section, edit `sectionImages` in
`resources/data.js` and change the `section` value to that section's id.

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

## House style

No em or en dashes anywhere in the copy. Use commas, colons or full stops
instead, and write ranges as "88 to 95%" or "2025 to 2028". Hyphens inside
compound words are fine and expected (real-time, six-member, AI-Assisted).

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
