import { prisma, User } from '../generated/prisma-client'

/**
 * ⚡️ Run `yarn upsert` to execute this script (or `yarn start` for more info).
 */

async function main() {
  // Update existing user of update if they don't exist yet
  const upsertedUser: User = await prisma.upsertUser({
    update: { role: 'ADMIN' },
    where: { email: 'alice@prisma.io' },
    create: {
      name: 'Alice',
      email: 'alice@prisma.io',
      role: 'ADMIN',
    },
  })
  console.log(`Updated or created: `, upsertedUser)
}

main()
