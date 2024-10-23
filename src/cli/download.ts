import { YoutubeService } from "../services";
import * as yargs from "yargs";

const bootstrap = async () => {
  const argv = await yargs
    .usage("Usage: $0 <url>")
    .demandCommand(1, "Se requiere la URL del video de YouTube").argv;

  const service = new YoutubeService();

  const validate = service.validateYoutubeLink(String(argv._[0]));

  if (!validate) {
    console.log("This is not a valid YouTube link");
    return;
  }
  service.processYoutubeLink(validate);
};

bootstrap();
