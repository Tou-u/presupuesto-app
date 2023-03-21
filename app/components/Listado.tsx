"use client"
import { Presupuesto } from "@prisma/client"
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Listado() {
  const { data, error, isLoading } = useSWR("/api/getpresupuesto", fetcher)

  console.log(data, error, isLoading)

  return (
    <>
      {isLoading && (
        <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
          <h1>Cargando....</h1>
        </div>
      )}
      {data?.map((p: Presupuesto) => (
        <div
          className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center"
          key={p.id}
        >
          <h1>{p.nombre}</h1>
          <br />
          <p>{p.costo}</p>
        </div>
      ))}
    </>
  )
}
