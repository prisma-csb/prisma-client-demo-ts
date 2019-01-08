import { prisma } from '../generated/prisma-client'

export async function checkWritesEnabled() {
  var writesEnabled = true
  try {
    await prisma.createUser({ email: "test" })
    await prisma.deleteUser({ email: "test" })
  } catch (e) {
    writesEnabled = false
  }
  return writesEnabled
}