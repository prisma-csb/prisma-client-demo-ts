import { prisma, Post, User } from "../generated/prisma-client";

/**
 * ⚡️Run `yarn lists-and-single-objects` to execute this script (or `yarn start` for more info).
 *
 * NOTE: This script contains an ID-placeholder. Please replace this placeholder before
 * running the script by copying an ID that's printed when running `yarn load-ids`.
 * Learn more in `./src/helpers/load-ids`.
 */

async function main() {
  // Fetch all posts
  const allPosts: Post[] = await prisma.posts();
  console.log(allPosts);

  // Fetch user by ID
  const userById: User = await prisma.user({
    id: "cjo5nvzyv4rry0a42xkyff6zc"
  });
  console.log(userById);

  // Fetch user by email
  const userByEmail: User = await prisma.user({
    email: "ada@prisma.io"
  });
  console.log(userByEmail);
}

main();
