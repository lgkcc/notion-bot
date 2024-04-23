import TelegramBot from "node-telegram-bot-api";

let a: number = 10;
a = 15;
console.log(a);

const bot = new TelegramBot('', { polling: true });