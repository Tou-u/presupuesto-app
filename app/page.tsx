import Modal from "./components/Modal"
import Listado from "./components/Listado"

export default function Home() {
  return (
    <>
      <Modal />
      <div className="flex flex-col justify-center items-center mt-5 lg:flex-row lg:justify-evenly">
        <div className="stats bg-neutral text-primary-content w-3/4 text-center lg:w-auto lg:self-start">
          <div className="stat">
            <div className="stat-title">Balance</div>
            <div className="stat-value">$89.400</div>
            <div className="stat-actions">
              <label className="btn btn-sm btn-success" htmlFor="my-modal">
                Nuevo gasto
              </label>
            </div>
          </div>
        </div>
        <div>
          <Listado />
        </div>
      </div>
    </>
  )
}
