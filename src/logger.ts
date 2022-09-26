import chalk from 'chalk';

export function warn(message: string) {
  console.warn(`${chalk.yellow('warn')}  - ${message}`);
}

export function info(message: string) {
  console.log(`${chalk.blue('info')}  - ${message}`);
}

export function error(message: string) {
  console.error(`${chalk.red('error')} - ${message}`);
}
