import chalk from "chalk";

export const logError = (message: any) => {
    console.log(chalk.red(message));
}

export const logInfo = (message: any) => {
  console.log(chalk.blueBright(message))
}