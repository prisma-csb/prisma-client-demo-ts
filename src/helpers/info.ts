import chalk from 'chalk'

const info = `
💡  Please fork this CodeSandbox in order to run the examples.

👉  Follow the instructions here: ${chalk.bold(`https://github.com/prisma-csb/prisma-client-demo-ts/blob/master/SETUP.md`)}

▶️  After you've forked the CodeSandbox and connected the Prisma client to your own demo database, run ${chalk.bold.blue(`$ yarn demo`)}
`

console.log(info)