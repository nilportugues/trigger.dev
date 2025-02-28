#!/usr/bin/env node

import { program } from "./cli/index.js";
import { logger } from "./utils/logger.js";

const main = async () => {
  await program.parseAsync();
};

main().catch((err) => {
  logger.error("Aborting installation...");
  if (err instanceof Error) {
    logger.error(err);
  } else {
    logger.error(
      "An unknown error has occurred. Please open an issue on github with the below:"
    );
    console.log(err);
  }
  process.exit(1);
});
