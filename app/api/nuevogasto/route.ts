import prisma from "@/utils/prisma"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  return new Response("Hello, Next.js!")
}

export async function POST(request: Request) {
  const { nombre, costo } = await request.json()

  const data = await prisma.presupuesto.create({
    data: {
      nombre,
      costo,
    },
  })

  return NextResponse.json(data)
}
