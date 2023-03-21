import prisma from "@/utils/prisma"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const presupuesto = await prisma.presupuesto.findMany()

  return NextResponse.json(presupuesto)
}
