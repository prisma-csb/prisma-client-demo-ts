import { prisma } from "../generated/prisma-client";

/**
 * NOTE: This script helps you to replace the
 * ID-placeholders (__POST_ID__ and __USER_ID__)
 * you find in some files. Execute the script
 * copy any ID from the output and replace a
 * placeholder with it.
 * Run `yarn load-ids` to execute this criupt.
 */

async function main() {
  const allPostsWithIDs = await prisma.posts();
  console.log(`Posts: \n`, allPostsWithIDs);

  const allUsersWithIDs = await prisma.users();
  console.log(`Users: \n`, allUsersWithIDs);
}

main();
