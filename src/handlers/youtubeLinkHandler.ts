import { Context } from "telegraf";
import { YoutubeService } from "../services/youtubeService";
import fs from "fs/promises";

const DELETE_VIDEOS_INMEDIATLY = true;

export const youtubeLinkHandler = async (message: string, ctx: Context) => {
  const youtubeService = new YoutubeService();
  const text = message || "";

  const link = youtubeService.validateYoutubeLink(text);

  if (link) {
    await ctx.sendChatAction("upload_video");
    const file = await youtubeService.processYoutubeLink(link);
    await ctx.replyWithVideo({
      source: file,
    });

    console.log("video sent");

    if (DELETE_VIDEOS_INMEDIATLY) {
      await fs.unlink(file);
    }
  } else {
    ctx.reply("This is not a valid YouTube link");
  }
};
