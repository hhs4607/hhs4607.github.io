# hhs4607.github.io

Personal academic website for **Hyeonseok Han** — CV and Portfolio.

## Structure
- `index.html` — CV (research interests, education, experience, publications, patents, skills, projects, grants, activities)
- `portfolio.html` — Portfolio (scaffold; detailed content to be added)
- `assets/style.css` — modern dark theme
- `assets/script.js` — reveal-on-scroll + footer year
- `assets/cv.pdf` — downloadable CV
- `assets/profile.png` — headshot

## Local preview
Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (not done yet)
To publish at `https://hhs4607.github.io`:
1. Create a public GitHub repo named exactly `hhs4607.github.io`
2. Push this folder to the `main` branch
3. Settings → Pages → Source: `main` / root
