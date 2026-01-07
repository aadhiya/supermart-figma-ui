# supermart-figma-ui
SuperMart App UI Prototype
# 🛒 SuperMart – Figma → React Grocery App

![Demo](screenshots/home.png)

**Figma:** [Prototype](https://www.figma.com/proto/f5ZnjWDpbzfOH4UfXHP1oV/Grocrey-App?node-id=1-2490&p=f&t=HWGWWSHrXhmYsPaL-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2490)

**React Live:** `npm run dev`

## 🚀 Quick Start
```bash
npm i
npm run dev

🎨 Tailwind CSS v4 + Vite FIX 👇
PostCSS v4 Solution (tested Jan 2026):


npm uninstall @tailwindcss/vite tailwindcss postcss autoprefixer
npm i tailwindcss @tailwindcss/postcss postcss


postcss.config.js:

export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}


vite.config.js:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

src/index.css:
@import "tailwindcss";

✅ No more "Cannot find module 'tailwindcss'" errors! [web:111]

📱 Features
Dynamic products API

Qatar pricing (QAR)

Mobile-first responsive

React Query caching

🛒 Screens Roadmap

✅ Home (Fruits + categories)
⏳ Category detail
⏳ Cart + Checkout
⏳ Profile
🔗 Tech Stack

React 19 + Vite + Tailwind v4 + React Query
Backend-ready (.NET API)
