import { prisma } from '../generated/prisma-client'

/**
 * ⚡️ Run `yarn filtering-and-sorting` to execute this script (or `yarn start` for more choices).
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
    .post({ id: 'cjo5nvzz74rs30a4269qb2t2f' })
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
