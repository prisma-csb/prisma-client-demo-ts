import { prisma } from '../generated/prisma-client'

/**
 * ⚡️ Run `yarn pagination` to execute this script (or `yarn start` for more choices).
 * 
 * 💡 See https://github.com/prisma-csb/prisma-client-demo-ts/blob/master/SETUP.md for instructions
 * how to fork this project and connect it to your own demo database.
 *
 * ⚠️ This script uses hardcoded IDs. If you've set up your own demo database, you need to replace
 * them with real IDs from your database. Run `yarn load-ids` to retrieve a list of all IDs. 
 * 
 */

async function main() {
  // Fetch the posts from position 6 to position 10
  const paginatedPosts1 = await prisma.posts({
    first: 5,
    skip: 5,
  })
  console.log(paginatedPosts1)

  // Fetch the last 3 posts after having
  // skipped 2 posts from the end of the list
  const paginatedPosts2 = await prisma.posts({
    last: 3,
    skip: 2,
  })
  console.log(paginatedPosts2)

  // Fetch the first 5 posts after a cursor
  const paginatedPosts3 = await prisma.posts({
    first: 5,
    after: 'cjo5nvzub4rrq0a42ptzqnq1b', // HARDCODED ID (run `$ yarn load-ids` to find a replacement)
  })
  console.log(paginatedPosts3)

  // Fetch the last 5 posts before a cursor
  const paginatedPosts4 = await prisma.posts({
    last: 5,
    before: 'cjo5nvzub4rrq0a42ptzqnq1b', // HARDCODED ID (run `$ yarn load-ids` to find a replacement)
  })
  console.log(paginatedPosts4)
}

main()
