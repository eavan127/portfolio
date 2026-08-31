# Eavan Tan — Portfolio

Personal portfolio site. Static HTML/CSS/JS — no build step, no dependencies,
no external scripts. Deploy by pointing GitHub Pages or Vercel at the repo root.

## Structure

```
index.html                      page shell — every section lives here
resources/styles.css            design system, 6 palettes x light/dark
resources/data.js               ALL CONTENT — edit this file
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

Fields marked as rich text — `bio`, project `impact`, expertise `bullets` —
accept `<strong>` for emphasis. Every other field is escaped and shown as-is.

## Adding your photo

Save a portrait as `resources/assets/hero/profile.jpg` (4:5 crop, ~800x1000).
It fills both the hero arch and the navbar avatar. Until it exists, both fall
back to an "ET" monogram — nothing breaks.

## Palettes

Six combinations, switchable live from the palette button in the header and
remembered in `localStorage`. Each has a matching dark variant.

| id | Combination |
|----|-------------|
| `emerald`  | Emerald & Antique Gold |
| `sapphire` | Midnight Sapphire & Ice Blue |
| `burgundy` | Burgundy & Champagne |
| `teal`     | Deep Teal & Copper |
| `indigo`   | Indigo & Violet |
| `graphite` | Graphite & Cyan |

To lock one in as the default, change the fallback in the inline script at the
top of `index.html` (`localStorage.getItem('palette') || 'emerald'`). To remove
the switcher entirely, delete the `#paletteToggle` button and the `#palettePop`
block from `index.html`.

## Local preview

```bash
python -m http.server 5599
```
