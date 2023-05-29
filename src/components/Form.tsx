import { useRef, useState } from "react";

export default function Form() {
  const [inputedData, setData] = useState({
    rfc: "",
    name: "",
    address: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateData = async (e: any) => {
    //e.preventDefault()
    const response = await fetch("/api/addTaxpayers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rfc: inputedData.rfc,
        name: inputedData.name,
        address: inputedData.address,
      }),
    });
  };

  const handleInputChange = (e: any) => {
    const inputName = e.target.value;

    // Validar que solo haya caracteres de texto (sin números)
    if (/^\D*$/.test(inputName)) {
      setData({ ...inputedData, name: inputName });
      setErrorMessage("");
    } else {
      setErrorMessage("Ingrese un dato válido (solo letras).");
    }
  };

  return (
    <section className="bg-gray-50 p-3 dark:bg-gray-900 sm:p-5">
      <div className="px-4 py-8 lg:px-12">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          SAT
        </h2>
        <form onSubmit={handleCreateData}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Dirección
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Calle 123, Ciudad de México"
                required
                onChange={(e) =>
                  setData({ ...inputedData, address: e.target.value })
                }
              ></input>
            </div>
            <div className="w-full">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Juan Pérez"
                onChange={handleInputChange}
                required
              ></input>
              {errorMessage && (
                <p className="text-sm text-red-500">{errorMessage}</p>
              )}
            </div>
            <div className="w-full">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                RFC
              </label>
              <input
                type="text"
                name="rfc"
                id="rfc"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="PERJ901231ABC"
                onChange={(e) =>
                  setData({ ...inputedData, rfc: e.target.value })
                }
                required
              ></input>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-start gap-x-2">
            <button
              type="submit"
              className="rounded-md bg-sky-500 px-6 py-2 text-sm font-semibold text-sky-100 shadow-md ring-gray-300 hover:bg-sky-700 focus:border-gray-900 focus:outline-none focus:ring"
            >
              Aceptar
            </button>
            <button
              type="submit"
              className="rounded-md bg-gray-400 px-6 py-2 text-sm font-semibold text-gray-100 shadow-md ring-gray-300 hover:bg-gray-600 focus:border-gray-900 focus:outline-none focus:ring"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
