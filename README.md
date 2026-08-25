# Anupam Shukla — data portfolio

Static site for analyst and scientist applications. All copy lives in [`js/content.js`](js/content.js). The resume PDF is [`assets/resume.pdf`](assets/resume.pdf).

## Run locally

Open `index.html` in a browser, or from this folder:

```bash
npx --yes serve .
```

`serve.json` turns off clean URLs so `project.html?id=etl` is not redirected.

Case studies: `project.html?id=etl` · `attrition` · `loan` · `channel`

## Publish on GitHub Pages

1. Push this folder to a GitHub repo.
2. Settings → Pages → Deploy from branch `main` / root.
3. Site URL will be `https://<you>.github.io/<repo>/`

## Edit later

Change name, links, jobs, or case studies in `js/content.js`. Replace `assets/resume.pdf` if the CV file changes.
