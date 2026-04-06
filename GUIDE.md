# Picnic Clone — Guide to Run the Project

## What's included

A full French-language clone of [picnic.app/fr](https://picnic.app/fr/) with 6 pages:

| Route | Page |
|---|---|
| `/` | Home — Hero, features, app download |
| `/cuisiner-avec-picnic` | Cuisiner avec Picnic — Recipes & meal inspiration |
| `/supermarche-en-ligne` | Supermarché en ligne — Browse grocery departments |
| `/a-propos` | À propos — Company story, mission, team values |
| `/faq` | FAQ — Accordion Q&A in French |
| `/contact` | Contact — Contact form and support options |

---

## Prerequisites

- **Node.js** v18 or higher (v20+ recommended)
- **pnpm** v9 or higher

Install pnpm if you don't have it:
```bash
npm install -g pnpm
```

---

## Installation

From the project root, install all dependencies:

```bash
pnpm install
```

---

## Running in development

Start the Picnic clone dev server:

```bash
pnpm --filter @workspace/picnic-clone run dev
```

Then open your browser at: **http://localhost:25896/** (or whatever port is shown in the terminal)

If you want to run via the shared proxy (port 80), which handles all artifacts together, the app is served at **http://localhost:80/**

---

## Building for production

Build a static production bundle:

```bash
pnpm --filter @workspace/picnic-clone run build
```

The output goes to `artifacts/picnic-clone/dist/public/`.

Serve the production build locally:

```bash
pnpm --filter @workspace/picnic-clone run serve
```

---

## Project structure

```
artifacts/picnic-clone/
├── src/
│   ├── App.tsx              ← Router setup (wouter)
│   ├── index.css            ← Global styles + Tailwind + theme
│   ├── main.tsx             ← React entry point
│   ├── pages/               ← One file per page
│   │   ├── Home.tsx
│   │   ├── Cuisiner.tsx
│   │   ├── Supermarche.tsx
│   │   ├── APropos.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   └── components/
│       ├── Navbar.tsx       ← Top navigation bar
│       └── Footer.tsx       ← Site footer
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## Tech stack

| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Dev server & bundler |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Wouter | Client-side routing |
| Lucide React | Icons |

---

## Customization

- **Colors**: The primary orange is `#FF6600`. Change it in `src/index.css` under the `:root` block.
- **Content**: All page content is hardcoded in the individual page components under `src/pages/`. Edit the text, images, or sections directly.
- **Images**: AI-generated images are referenced from `src/assets/`. You can replace them with your own.
- **Navigation links**: Edit `src/components/Navbar.tsx` to add, remove, or rename menu items.
- **Footer**: Edit `src/components/Footer.tsx` to update company info, social links, and legal text.

---

## Environment variables

The dev server reads two environment variables set automatically by the Replit platform:

- `PORT` — the port number to listen on
- `BASE_PATH` — the URL base path (e.g. `/`)

These are handled automatically. If running outside Replit, set them manually:

```bash
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/picnic-clone run dev
```

---

## Deploying

On Replit, click the **Publish** button to deploy as a static site. The app will be available at a `.replit.app` domain.

For self-hosting, take the build output from `artifacts/picnic-clone/dist/public/` and serve it with any static file server (Nginx, Caddy, Netlify, Vercel, etc.).

---

## Hosting on GitHub

### Step 1 — Push your code to GitHub

If you don't already have Git installed, download it from [git-scm.com](https://git-scm.com).

**1. Create a new repository on GitHub**

Go to [github.com/new](https://github.com/new), give your repo a name (e.g. `picnic-clone`), leave it public or private, and click **"Create repository"**. Do NOT initialize it with a README.

**2. Initialize Git in the project root and push**

Open a terminal in the project folder, then run:

```bash
git init
git add .
git commit -m "Initial commit — Picnic clone"
git branch -M main
git remote add origin https://github.com/Salowe1/Siik-Zakin.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

### Step 2 — Deploy on GitHub Pages (free hosting)

GitHub Pages serves static files directly from your repository. Since this app builds to static HTML/CSS/JS, it works perfectly.

**1. Adjust the Vite base path for GitHub Pages**

By default the app is built with `base: "/"`. On GitHub Pages, your site lives at `https://YOUR_USERNAME.github.io/picnic-clone/`, so you need to tell Vite about the subfolder.

Open `artifacts/picnic-clone/vite.config.ts` and change the `base` line:

```ts
// Replace this line:
base: basePath,

// With this (use your actual repo name):
base: process.env.NODE_ENV === "production" ? "/picnic-clone/" : basePath,
```

Also update `src/App.tsx` — change the router base:

```tsx
// Replace:
<WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>

// With:
<WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "") || ""}>
```

**2. Install the `gh-pages` package**

```bash
cd artifacts/picnic-clone
pnpm add -D gh-pages
```

**3. Add deploy scripts to `artifacts/picnic-clone/package.json`**

Add these two lines inside the `"scripts"` block:

```json
"predeploy": "pnpm run build",
"deploy": "gh-pages -d dist/public"
```

**4. Build and deploy**

```bash
PORT=3000 BASE_PATH=/picnic-clone/ pnpm --filter @workspace/picnic-clone run deploy
```

**5. Enable GitHub Pages in your repository settings**

- Go to your repository on GitHub
- Click **Settings** → **Pages** (left sidebar)
- Under **Branch**, select `gh-pages` and click **Save**

Your site will be live at:
```
https://YOUR_USERNAME.github.io/picnic-clone/
```

It may take 1–2 minutes to appear the first time.

---

### Alternative — Deploy with GitHub Actions (automatic)

This approach automatically rebuilds and deploys every time you push to `main`.

**1. Create the workflow file**

Create `.github/workflows/deploy.yml` in your project root:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install pnpm
        run: npm install -g pnpm

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: PORT=3000 BASE_PATH=/picnic-clone/ pnpm --filter @workspace/picnic-clone run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: artifacts/picnic-clone/dist/public

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

**2. Enable GitHub Pages with GitHub Actions as the source**

- Go to **Settings** → **Pages**
- Under **Source**, select **"GitHub Actions"**

**3. Push and it deploys automatically**

```bash
git add .
git commit -m "Add GitHub Actions deploy workflow"
git push
```

Every future push to `main` will trigger a new build and deployment automatically.

---

### Summary — Hosting options at a glance

| Option | Cost | Custom domain | Auto-deploy |
|---|---|---|---|
| GitHub Pages (manual) | Free | Yes | No |
| GitHub Pages (Actions) | Free | Yes | Yes |
| Netlify | Free tier | Yes | Yes |
| Vercel | Free tier | Yes | Yes |

For Netlify or Vercel, simply drag and drop the `artifacts/picnic-clone/dist/public/` folder onto their dashboard after running `pnpm --filter @workspace/picnic-clone run build`, or connect your GitHub repo for automatic deploys.
