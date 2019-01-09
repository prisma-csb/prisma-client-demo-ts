import { prisma } from '../generated/prisma-client'

/**
 * ⚡️ Run `yarn lists-and-single-objects` to execute this script (or `yarn start` for more choices).
 */

async function main() {
  // Fetch all posts
  const allPosts = await prisma.posts()
  console.log(allPosts)

  // Fetch comment by ID
  const userById = await prisma.user({ id: 'cjnymovv3s3ht0a516fhmria8' })
  console.log(userById)

  // Fetch user by email
  const userByEmail = await prisma.user({ email: 'ada@prisma.io' })
  console.log(userByEmail)
}

main()
