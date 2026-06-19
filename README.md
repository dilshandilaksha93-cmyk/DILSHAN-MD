<div align="center">

<img src="https://i.ibb.co/VWy8DK06/Whats-App-Image-2025-12-09-at-17-38-33-fd4d4ecd.jpg" width="180" />

# 👑 XPROVerce MD
### Advanced WhatsApp Multi-Device Bot

[🌐 Home](http://xpro-verce.vercel.app/) •
[💻 GitHub](https://github.com/xproverce/XPROVerce-MD)

</div>

---

## 🚀 About

**XPROVerce MD** is a powerful **WhatsApp Multi-Device bot** built using **Baileys MD**.  
Designed for **speed, stability, and scalability**, it supports plugins, automation, media tools, and cloud deployment.

---

## ✨ Features

- 🔗 WhatsApp Multi-Device (Baileys MD)
- 🧩 Plugin-based command system
- 💬 Buttons, Lists & Reaction Commands
- 📥 Media download & processing
- 👥 Group moderation & automation
- 🌙 Night Mode & presence control
- ⚙️ Free & Premium settings
- 📢 Status auto-view & reactions
- 🔐 Session auto-restore
- 🌐 Built-in Express server
- 🔄 Update-ready architecture

---

## 🛠️ Tech Stack

- Node.js
- Baileys MD
- Express.js
- Axios
- Sharp
- Node-Cache
- MegaJS

---

## 📦 Installation (Local)

```bash
git clone https://github.com/xproverce/XPROVerce-MD.git
cd XPROVerce-MD
npm install
npm start
````

---

## 🔑 Environment Variables

```env
PORT=8000
SESSION_ID=your_session_id
```

---

# 🚀 Deployment Platforms

## 🟣 Heroku

> ⚠️ Heroku requires a **worker dyno**, not web.

1. Fork the repository
2. Create a new Heroku app
3. Set **Buildpack**:

   ```
   heroku/nodejs
   ```
4. Add Environment Variables in **Config Vars**
5. Deploy from GitHub
6. Start **worker dyno**

```bash
heroku ps:scale worker=1
```

---

## 🟢 Koyeb

1. Fork the repo
2. Go to **koyeb.com**
3. Create App → GitHub Repository
4. Runtime: **Node.js**
5. Start command:

   ```bash
   npm start
   ```
6. Add environment variables
7. Deploy ✅

---

## 🔵 Render

1. Fork the repo
2. Go to **render.com**
3. New → **Background Worker**
4. Connect GitHub repository
5. Build command:

   ```bash
   npm install
   ```
6. Start command:

   ```bash
   npm start
   ```
7. Add environment variables
8. Deploy 🚀

---

## 🟡 Railway (Recommended)

1. Fork repository
2. Go to **railway.app**
3. New Project → Deploy from GitHub
4. Add environment variables
5. Start command:

   ```bash
   npm start
   ```
6. Done ✅

> Best for WhatsApp bots (long-running process support)

---

## ⚙️ GitHub Actions (CI)

Create this file:

### 📁 `.github/workflows/node.yml`

```yaml
name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]

    steps:
    - uses: actions/checkout@v4

    - name: Use Node.js
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}

    - run: npm install
    - run: npm test --if-present
```

---

## ⚠️ Important Notes

* Do **NOT** obfuscate updater or loader files
* Obfuscate only core logic if needed
* Keep `start.js` clean
* Follow WhatsApp Terms of Service

---

## 📜 Disclaimer

This project is for **educational purposes only**.
The developer is **not responsible** for misuse or WhatsApp policy violations.

---

## 👑 Credits

* **XPROVerce Team**
* **Baileys Multi-Device**
* Open-source contributors

---

⭐ **Star this repo if you like it!**

```
