import { prisma, User, Post } from "../generated/prisma-client";

/**
 * ⚡️Run `yarn declarative-nested-write` to execute this script (or `yarn start` for more info).
 *
 * NOTE: This script contains an ID-placeholder. Please replace this placeholder before
 * running the script by copying an ID that's printed when running `yarn load-ids`.
 * Learn more in `./src/helpers/load-ids`.
 */

async function main() {
  // Create a new user with two posts in a single transaction
  // IF THIS FAILS, TRY CHANGING THE `email` (Prisma does't allow having two users with the same email in the DB)
  const newUser: User = await prisma.createUser({
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join us for GraphQL Conf in 2018"
        },
        {
          title: "Subscribe to GraphQL Weekly for GraphQL news"
        }
      ]
    }
  });
  console.log(`Created user (incl two posts): `, newUser);

  // Change the author of a post in a single transaction
  const updatedPost: Post = await prisma.updatePost({
    data: {
      author: {
        connect: {
          email: "ada@prisma.io"
        }
      }
    },
    where: {
      id: "cjo5nvzz24rrz0a42gmhhi3rv"
    }
  });
  console.log(`Connected post to user: `, updatedPost);
}

main();
