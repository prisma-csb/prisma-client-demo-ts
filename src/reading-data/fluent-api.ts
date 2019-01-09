import { prisma } from '../generated/prisma-client'

/**
 * ⚡️ Run `yarn fluent-api` to execute this script (or `yarn start` for more info).
 */

async function main() {
  // Retrieving the posts of a user
  const postsByUser = await prisma
    .user({ email: 'ada@prisma.io' })
    .posts()
  console.log(postsByUser)

  // Retrieving all comments of a post
  const commentsOnPost = await prisma
    .post({ id: 'cjo5nvzz74rs30a4269qb2t2f' })
    .comments()
  console.log(commentsOnPost)

  // Retrieving the comments of a post author
  const commentsOfPostAuthor = await prisma
    .post({ id: 'cjo5nvzu84rro0a421cjk5mse' })
    .author()
    .comments()
  console.log(commentsOfPostAuthor)
}

main()
