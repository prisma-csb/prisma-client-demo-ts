import { prisma } from "../generated/prisma-client";

/**
 * ⚡️Run `yarn field-selection` to execute this script (or `yarn start` for more info).
 */

async function main() {
  // Fetch only the ID of a user with a specific email
  const user: any = await prisma
    .user({ email: "ada@prisma.io" })
    .$fragment(`fragment UserId on User { id }`);
  console.log(`Fetched user ID: `, user);

  // Fetch all posts with their authors and comments, retrieving only specific fields
  const posts: any = await prisma.posts().$fragment(`
fragment PostWithAuthorsAndComments on Post {
  title
  author { name }
  comments { text }
}
`);
  console.log(`Fetched posts: `, posts);
}

main();
