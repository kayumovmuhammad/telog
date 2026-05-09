# 🚀 Telegram Logger Simple

[![npm version](https://img.shields.io/npm/v/telegram-logger-simple.svg?style=flat-square)](https://www.npmjs.com/package/telegram-logger-simple)
[![license](https://img.shields.io/npm/l/telegram-logger-simple.svg?style=flat-square)](https://github.com/kayumovmuhammad/telog/blob/main/LICENSE)
[![install size](https://img.shields.io/badge/install%20size-2.0%20kB-brightgreen?style=flat-square)](#)

A ultra-lightweight, zero-dependency Telegram logger for Node.js. Send logs, notifications, or debug information directly to your Telegram chat with just one line of code.

---

## 📦 Installation

Install the package via npm:

```bash
npm install telegram-logger-simple
```

---

## ⚙️ Setup

Before using the logger, you need to obtain a **Bot Token** and your **Chat ID**.

### 1. Create a Telegram Bot
*   Open [BotFather](https://t.me/botfather) in Telegram.
*   Use the `/newbot` command to create a new bot.
*   Copy the **API Token** provided by BotFather.
*   Start your bot by sending `/start` command to it.

### 2. Get Your Chat ID
*   Open [Get My ID Bot](https://t.me/getmyid_bot) in Telegram.
*   Send any message to it.
*   Copy your **Chat ID** (the number in the "Your ID" field).

---

## 🚀 Usage

Using **telegram-logger-simple** is extremely straightforward. Just initialize it once and start logging!

### ES Modules (Recommended)

```javascript
import bot from 'telegram-logger-simple';

// Initialize with your credentials
bot.init({
  botToken: 'YOUR_BOT_TOKEN',
  chatId: 'YOUR_CHAT_ID'
});

// Send a log message
bot.log('Hello from my app! 🚀');
```

---

## 💡 Why use this?

*   **Zero Dependencies**: Minimal impact on your project's bundle size.
*   **Simple API**: No complex configurations or boilerplate.
*   **Real-time Notifications**: Get notified about errors or events instantly on your phone.
*   **Modern JS**: Full support for ES Modules.

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/kayumovmuhammad">Kayumov Muhammad</a>
</p>
