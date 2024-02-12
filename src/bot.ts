import { Telegraf } from "telegraf";
import { youtubeLinkHandler } from "./handlers/youtubeLinkHandler";
import { message } from "telegraf/filters";
import { config } from "./config";

const bot = new Telegraf(config.botToken, {
  telegram: {
    apiRoot: `${config.telegramApiURL}`,
  },
});

bot.start((ctx) => ctx.reply("Welcome!"));
bot.help((ctx) => ctx.reply("Send me a YouTube link and I will handle it!"));

bot.on(message("text"), (ctx) => {
  const text = ctx.message.text || "";
  youtubeLinkHandler(text, ctx);
});

bot.launch();

// start bot event

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
