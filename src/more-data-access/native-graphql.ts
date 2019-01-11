import { prisma } from '../generated/prisma-client'

/**
 * ⚡️ Run `yarn native-graphql` to execute this script (or `yarn start` for more choices).
 * 
 * 💡 See https://github.com/prisma-csb/prisma-client-demo-ts/blob/master/SETUP.md for instructions
 * how to fork this project and connect it to your own demo database.
 * 
 */

async function main() {
  // Fetch all posts with their authors and comments, retrieving only specific fields
  const query = `
query {
  posts {
    title
    author {
      name
    }
    comments {
      text
    }
  }
}
`
  const postsWithAuthorAndComments = await prisma.$graphql(query)
  console.log(`Query result: `, postsWithAuthorAndComments)

  // Create a new user
  const mutation = `
mutation($email: String!) {
  createUser(data: {
    email: $email
  }) {
    id
  }
}
`
  // IF THIS FAILS, TRY CHANGING THE `email` (Prisma does't allow having two users with the same email in the DB)
  const variables = { email: 'bob@prisma.io' }
  const newUser = await prisma.$graphql(mutation, variables)
  console.log(`Mutation result: `, newUser)
}

main()
