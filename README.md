<div align="center">

<img src="https://i.ibb.co/VWy8DK06/Whats-App-Image-2025-12-09-at-17-38-33-fd4d4ecd.jpg" width="180" />

# 👑 DILSHAN-MD
### Advanced WhatsApp Multi-Device Bot

[💻 GitHub](https://github.com/DILSHAN-MD-MD)

</div>

---

## 🚀 About

**DILSHAN-MD** is a powerful **WhatsApp Multi-Device bot** built using **SATHIYA MD**.  
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

---

## 📦 Installation (Local)

```bash
git clone https://github.com/DILSHAN-MD.git
cd DILSHAN-MD
npm install
npm start
````

---

## 🔑 Environment Variables

```env
PORT=8000
SESSION_ID=your_session_id
```
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

* **DILSHAN Team**
* **Baileys Multi-Device**
* Open-source contributors

---

⭐ **Star this repo if you like it!**

```
