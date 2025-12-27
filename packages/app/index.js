/**
 * Main application that uses workspace packages
 */

import { greet, add, multiply } from '@node-learn/utils';
import chalk from 'chalk';

console.log(chalk.blue('=== Node.js Workspace Demo ===\n'));

console.log(chalk.green(greet('Developer')));
console.log(chalk.yellow(`2 + 3 = ${add(2, 3)}`));
console.log(chalk.magenta(`4 × 5 = ${multiply(4, 5)}`));

console.log(chalk.cyan('\n✓ Workspace packages are working!'));
