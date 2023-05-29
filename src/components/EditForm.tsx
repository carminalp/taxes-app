import { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function EditForm() {
  const router = useRouter();
  const { id, rfc, name, address } = router.query;

  const [inputedData, setData] = useState({
    id: id,
    rfc: "",
    name: "",
    address: "",
  });

  const handleCreateData = async (e: any) => {
    const response = await fetch("/api/updateTaxpayer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: parseInt(inputedData.id),
        rfc: inputedData.rfc,
        name: inputedData.name,
        address: inputedData.address,
      }),
    });
  };

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <section className="bg-gray-50 p-3 dark:bg-gray-900 sm:p-5">
      <div className="px-4 py-8 lg:px-12">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Actualiza tus datos
        </h2>
        <form onSubmit={handleCreateData}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Dirección
              </label>
              <input
                type="text"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder={address}
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
                placeholder={name}
                onChange={(e) =>
                  setData({ ...inputedData, name: e.target.value })
                }
                required
              ></input>
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
                placeholder={rfc}
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
              onClick={handleRedirect}
            >
              Editar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
