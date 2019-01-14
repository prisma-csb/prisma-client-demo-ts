import { prisma } from '../generated/prisma-client'

/**
 * ⚡️ Run `yarn realtime-subscriptions` to execute this script (or `yarn demo` for more choices).
 * 
 * 💡 See https://github.com/prisma-csb/prisma-client-demo-ts/blob/master/SETUP.md for instructions
 * how to fork this project and connect it to your own demo database.
 * 
 *
 * NOTE: To trigger a subscription, you need to perform a write-operation
 * (e.g. in another browser window or tab) while this script is running.
 */

async function main() {
  // Fires for every write on `User`
  const userIterator = await prisma.$subscribe.user().node()

  // Fires for every write on `Post` where a new `Post` is _created_ where
  // the `title` contains either "GraphQL" or "REST"
  const newPostIterator = await prisma.$subscribe
    .post({
      mutation_in: ['CREATED'],
      node: {
        OR: [{ title_contains: 'GraphQL' }, { title_contains: 'REST' }],
      },
    })
    .node()

  // Endless loop waiting for subscription events
  while (true) {
    // Switch around the comments to activate the `Post`-subscription
    const result = await userIterator.next()
    // const result = await newPostIterator.next();
    console.log(result.value)
  }
}

main()
