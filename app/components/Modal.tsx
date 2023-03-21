"use client"
import { ChangeEvent, useState } from "react"
import axios from "axios"
import { useSWRConfig } from "swr"

export default function Modal() {
  const [nombre, setNombre] = useState("")
  const [costo, setCosto] = useState("")

  const { mutate } = useSWRConfig()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\D/g, "")
    setCosto(result)
  }

  const clearForm = () => {
    setNombre("")
    setCosto("")
  }

  const sendForm = async () => {
    if (nombre.trim() === "" || costo.trim() === "") return
    const format = parseInt(costo)
    const data = { nombre, costo: format }

    // postData("/api/nuevogasto", data)
    const res = await axios.post("/api/nuevogasto", data)
    console.log(res.data)
    mutate("/api/getpresupuesto")

    clearForm()
    const ele = document.getElementById("my-modal") as HTMLInputElement
    ele.checked = false
  }

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-neutral">
          <h3 className="font-bold text-lg">Ingreso de nuevo gasto</h3>
          <div className="form-control mt-4 gap-3">
            <label className="input-group input-group-vertical">
              <span className="bg-neutral-focus">Nombre del gasto</span>
              <input
                type="text"
                placeholder="Ingrese el nombre del gasto"
                className="input focus:outline-none"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </label>
            <label className="input-group input-group-vertical">
              <span className="bg-neutral-focus">Costo</span>
              <input
                type="text"
                placeholder="Ingrese el costo del gasto"
                className="input focus:outline-none"
                value={costo}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn btn-sm btn-secondary">
              Cancelar
            </label>
            <label className="btn btn-sm btn-primary" onClick={sendForm}>
              Agregar
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
