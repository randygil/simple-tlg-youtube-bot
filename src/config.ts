import "dotenv/config";

class Config {
  get botToken(): string {
    return this.getEnv("BOT_TOKEN") ?? "";
  }

  get telegramApiURL(): string {
    return this.getEnv("TELEGRAM_API_URL") ?? "";
  }
  get deleteVideos(): boolean {
    return Boolean(process.env.DELETE_VIDEOS_INMEDIATLY);
  }

  private getEnv(key: string) {
    if (!process.env[key]) {
      throw new Error(`Environment variable ${key} is not set`);
    }
    return process.env[key];
  }
}

export const config = new Config();
