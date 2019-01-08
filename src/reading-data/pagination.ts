import { prisma, Post } from "../generated/prisma-client";

/**
 * ⚡️Run `yarn pagination` to execute this script (or `yarn start` for more info).
 *
 * NOTE: This script contains an ID-placeholder. Please replace this placeholder before
 * running the script by copying an ID that's printed when running `yarn load-ids`.
 * Learn more in `./src/helpers/load-ids`.
 */

async function main() {
  // Fetch the posts from position 6 to position 10
  const paginatedPosts1: Post[] = await prisma.posts({
    first: 5,
    skip: 5
  });
  console.log(paginatedPosts1);

  // Fetch the last 3 posts after having
  // skipped 2 posts from the end of the list
  const paginatedPosts2: Post[] = await prisma.posts({
    last: 3,
    skip: 2
  });
  console.log(paginatedPosts2);

  // Fetch the first 5 posts after a cursor
  const paginatedPosts3: Post[] = await prisma.posts({
    first: 5,
    after: "cjo5nvzub4rrq0a42ptzqnq1b" // replace with any post ID obtained from running `yarn load-ids`
  });
  console.log(paginatedPosts3);

  // Fetch the last 5 posts before a cursor
  const paginatedPosts4: Post[] = await prisma.posts({
    last: 5,
    before: "cjo5nvzub4rrq0a42ptzqnq1b" // replace with any post ID obtained from running `yarn load-ids`
  });
  console.log(paginatedPosts4);
}

main();
