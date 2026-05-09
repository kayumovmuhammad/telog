import "dotenv/config";

function sendMessage(message, botToken, chatId) {
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;
  console.log(apiUrl);
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to send message: ${res.statusText}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log("Message sent successfully:", data);
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
}

export default function telog(message) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Environment variables TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are not defined.");
  }

  sendMessage(message, botToken, chatId);
}
