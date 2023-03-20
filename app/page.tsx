import Modal from "./components/Modal"

export default function Home() {
  return (
    <>
      <Modal />
      <div className="flex flex-col justify-center items-center mt-5 lg:flex-row lg:justify-evenly">
        <div className="stats bg-neutral text-primary-content w-3/4 text-center lg:w-auto">
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
          <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
            1
          </div>
          <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
            2
          </div>
          <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
            3
          </div>
        </div>
      </div>
    </>
  )
}
