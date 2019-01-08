import { prisma, Post, User, Comment } from "../generated/prisma-client";

/**
 * ⚡️Run `yarn filtering-and-sorting` to execute this script (or `yarn start` for more info).
 *
 * NOTE: This script contains an ID-placeholder. Please replace this placeholder before
 * running the script by copying an ID that's printed when running `yarn load-ids`.
 * Learn more in `./src/helpers/load-ids`.
 */

async function main() {
  // Fetch all published posts about GraphQL or REST
  const posts: Post[] = await prisma.posts({
    where: {
      OR: [{ title_contains: "GraphQL" }, { title_contains: "REST" }],
      published: true
    },
    orderBy: "createdAt_ASC"
  });
  console.log(posts);

  // Fetch all comments that start with "Great" of a particular post
  const comments: Comment[] = await prisma
    .post({
      id: "cjo5nvzz74rs30a4269qb2t2f"
    })
    .comments({
      where: {
        text_starts_with: "Great"
      }
    });
  console.log(comments);

  // Sort posts chronologically
  const sortedPosts: Post[] = await prisma.posts({
    orderBy: "createdAt_ASC"
  });
  console.log(sortedPosts);
}

main()
