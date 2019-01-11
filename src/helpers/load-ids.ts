import { prisma } from '../generated/prisma-client'
import chalk from 'chalk'

/**
 * ⚡️ Run `yarn load-ids` to print all IDs of the users and posts in the database.
 */

async function main() {
  const allPostsWithIDs = await prisma.posts()
  console.log(chalk.cyan.bold(`Posts: \n`), allPostsWithIDs, '\n')

  const allUsersWithIDs = await prisma.users()
  console.log(chalk.cyan.bold(`Users: \n`), allUsersWithIDs)
}

main()
