import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.presupuesto.create({
    data: {
      nombre: "Gasto1",
      costo: 10000,
    },
  })
  await prisma.presupuesto.create({
    data: {
      nombre: "Gasto2",
      costo: 20000,
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
