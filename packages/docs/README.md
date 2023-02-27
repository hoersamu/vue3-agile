<div align="center">
  <h1>Vue3-Agile Docs</h1>
  <p>Documentation for the Vue Plugin <a href="https://npmjs.com/package/vue3-agile">Vue3-Agile</a></p>
</div>

## Run project locally

Use this command below to boot this project locally.

```bash
git clone https://github.com/hoersamu/vue3-agile.git

cd vue3-agile/docs

pnpm install

npm run docs:dev
```

Visit [https://localhost:5173](https://localhost:5173) to see your site

## Build
You may run this command to build the docs

```bash
npm run docs:build
```

## Folder Structure

```
docs/
├── .vitepress/
│   ├── config.js
│   └── theme/
│       ├── index.js
│       └── custom.css
├── public/
│   ├── logo.svg
│   └── logo-big.svg
├── about.md
├── configs.md
├── contact.md
├── get-started.md
├── guide.md
├── index.md
├── package.json
└── README.md
```