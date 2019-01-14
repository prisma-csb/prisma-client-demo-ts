import { prisma, BatchPayload } from '../generated/prisma-client'

/**
 * ⚡️ Run `yarn batching` to execute this script (or `yarn demo` for more choices).
 * 
 * 💡 See https://github.com/prisma-csb/prisma-client-demo-ts/blob/master/SETUP.md for instructions
 * how to fork this project and connect it to your own demo database.
 * 
 */

async function main() {
  // Grant admin access to all users who have a prisma.io-email
  const updatedUsers = await prisma.updateManyUsers({
    data: { role: 'ADMIN' },
    where: { email_ends_with: '@prisma.io' },
  })
  console.log(`Updated ${updatedUsers} users`)

  // Delete two users with specific email adresses (emails that don't exist are silently ignored)
  const deletedUsers: BatchPayload = await prisma.deleteManyUsers({
    email_in: ['alice@prisma.io', 'bob@prisma.io'],
  })
  console.log(`Deleted ${deletedUsers.count} users`)
}

main()
