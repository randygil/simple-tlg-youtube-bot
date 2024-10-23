import youtubeDl from "youtube-dl-exec";
import fs from "fs/promises";
const DEFAULT_CONFIG = {
  quality: "1080",
};

const TEMP_DIR = "/tmp";

export class YoutubeService {
  private readonly YOUTUBE_LINK_REGEX =
    /^(?:(?:https|http):\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be).*?(?:\/|v\/|u\/|embed\/|shorts\/|watch\?v=|(?<username>user\/))(?<id>[\w\-]{11})(?:\?|&|$)/;

  public validateYoutubeLink(youtubeLink: string): string | null {
    const match = youtubeLink.match(this.YOUTUBE_LINK_REGEX);
    if (match?.groups?.username || !match?.groups?.id) {
      return null;
    }
    return match.groups.id;
  }

  public async processYoutubeLink(youtubeLink: string): Promise<string> {
    console.log(`Processing youtube link: ${youtubeLink}`);

    const filepath = `${TEMP_DIR}/${youtubeLink}.mp4`;
    console.log(`Filepath: ${filepath}`);

    try {
      const exists = await fs
        .access(filepath)
        .then(() => true)
        .catch(() => false);

      if (!exists) {
        await youtubeDl(
          youtubeLink,
          {
            format: "137",
            output: filepath,
          },
          {
            stdio: "inherit",
          }
        );
      } else {
        console.log("file already exists");
      }
    } catch (error) {
      console.error("Error processing YouTube link:", error);
      throw new Error("An error occurred while processing the YouTube link.");
    }

    return filepath;
  }
}
