# Eavan Tan — Portfolio

Personal portfolio site. Static HTML/CSS/JS — no build step, no dependencies.

Deploy by pointing GitHub Pages or Vercel at the repository root.

## Structure

```
index.html        page markup + section skeletons
css/styles.css    design system, six switchable palettes
js/data.js        ALL CONTENT — projects, experience, awards, certifications
js/main.js        rendering, filters, palette switcher, scroll behaviour
assets/           résumé PDF, profile photo
```

## Editing content

Everything readable lives in `js/data.js`. Add a project by appending an object
to `PROJECTS`; the card, its filter category and its links render themselves.

- `repo: null` renders "Repository private"
- `live: null` renders "No live deployment"

## Adding your photo

Drop a portrait at `assets/profile.jpg` (portrait crop, 4:5 works best).
Until then the hero shows an initials placeholder.

## Palettes

Six combinations ship in `css/styles.css`, switchable live from the palette
button in the header and remembered in `localStorage`:

| id | Combination |
|----|-------------|
| `emerald`  | Emerald & Antique Gold |
| `sapphire` | Midnight Sapphire & Ice Blue |
| `burgundy` | Burgundy & Champagne |
| `teal`     | Deep Teal & Copper |
| `indigo`   | Indigo & Violet |
| `graphite` | Graphite & Cyan |

Once you pick one, set it as the default in two places: the `data-theme`
attribute on `<body>` in `index.html`, and the fallback in `applyTheme` at the
bottom of `js/main.js`.

## Local preview

```bash
python -m http.server 5599
```
