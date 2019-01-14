import { prisma } from '../generated/prisma-client'

/**
 * ⚡️ Run `yarn filtering-and-sorting` to execute this script (or `yarn demo` for more choices).
 * 
 * 💡 See https://github.com/prisma-csb/prisma-client-demo-ts/blob/master/SETUP.md for instructions
 * how to fork this project and connect it to your own demo database.
 *  
 * ⚠️ This script uses hardcoded IDs. If you've set up your own demo database, you need to replace
 * them with real IDs from your database. Run `yarn load-ids` to retrieve a list of all IDs. 
 * 
 */

async function main() {
  // Fetch all published posts about GraphQL or REST
  const posts = await prisma.posts({
    where: {
      OR: [{ title_contains: 'GraphQL' }, { title_contains: 'REST' }],
      published: true,
    },
    orderBy: 'createdAt_ASC',
  })
  console.log(posts)

  // Fetch all comments that start with "Great" of a particular post
  const comments = await prisma
    .post({ id: 'cjo5nvzz74rs30a4269qb2t2f' }) // HARDCODED ID (run `$ yarn load-ids` to find a replacement)
    .comments({
      where: { text_starts_with: 'Great' },
    })
  console.log(comments)

  // Sort posts chronologically
  const sortedPosts = await prisma.posts({
    orderBy: 'createdAt_ASC',
  })
  console.log(sortedPosts)
}

main()
