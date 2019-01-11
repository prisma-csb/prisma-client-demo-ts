import { prisma } from '../generated/prisma-client'

/**
 * ⚡️ Run `yarn lists-and-single-objects` to execute this script (or `yarn start` for more choices).
 * 
 * 💡 See https://github.com/prisma-csb/prisma-client-demo-ts/blob/master/SETUP.md for instructions
 * how to fork this project and connect it to your own demo database.
 * 
 * ⚠️ This script uses hardcoded IDs. If you've set up your own demo database, you need to replace
 * them with real IDs from your database. Run `yarn load-ids` to retrieve a list of all IDs. 
 * 
 */

async function main() {
  // Fetch all posts
  const allPosts = await prisma.posts()
  console.log(allPosts)

  // Fetch comment by ID
  const userById = await prisma.user({ id: 'cjnymovv3s3ht0a516fhmria8' }) // HARDCODED ID (run `$ yarn load-ids` to find a replacement)
  console.log(userById)

  // Fetch user by email
  const userByEmail = await prisma.user({ email: 'ada@prisma.io' })
  console.log(userByEmail)
}

main()
