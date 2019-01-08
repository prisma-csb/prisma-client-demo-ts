import { prisma } from '../generated/prisma-client'

async function main() {
  const allPostsWithIDs = await prisma.posts()
  console.log(`Posts: \n`, allPostsWithIDs)

  const allUsersWithIDs = await prisma.users()
  console.log(`Users: \n`, allUsersWithIDs)
}

main()
