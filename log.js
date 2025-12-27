import chalk from "chalk";

const logError = (message, errorCode) => {
    console.log(chalk.red(message, errorCode));
}

const logInfo = (message) => {
  console.log(chalk.blueBright(message))
}

export {logError, logInfo};