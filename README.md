# Simple Youtube Download Bot

This is a simple Telegram bot written in TypeScript and Node.js. The bot is designed to handle messages containing YouTube links and send the video.

## Project Structure

- `src/bot.ts`: Entry point of the bot. Initializes the Telegram bot and sets up the message handlers.
- `src/handlers/`: Contains all the message handlers used by the bot.
- `src/services/`: Contains all the services used by the bot.
- `src/types/`: Contains any custom types used in the project.
- `tsconfig.json`: Configuration file for TypeScript.
- `package.json`: Configuration file for npm.

## Setup

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Create a `.env` file in the root directory and add your Telegram API token like this: `BOT_TOKEN=your_token_here`.
4. Run `docker-compose up -d` to start the telegram-bot-api server.
5. Run `npm start` to start the bot.

## Usage

Once the bot is running, any message containing a YouTube link sent to the bot will be processed. The bot uses the `YoutubeService` to extract video information from the links.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
