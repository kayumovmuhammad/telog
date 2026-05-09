import { setConfig } from "./config.js";

export default function initBot({ botToken, chatId }) {
  setConfig({ botToken, chatId });
}
