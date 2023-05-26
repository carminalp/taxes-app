import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { useState, useEffect } from "react";

interface Data {
  id: number;
  rfc: string;
  name: string;
  address: string;
}

interface Props {
  data: Data[];
}

const styles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(6.5),
      height: theme.spacing(6.5),
      borderRadius: "50%",
      border: `2px solid ${theme.palette.common.white}`,
    },
  })
);

const TaxpayersItem: React.FC<Props> = ({ data }) => {
  const classes = styles();

  return (
    <div className="relative overflow-x-auto ">
      <table className="w-full text-left">
        <thead className="border border-gray-200 bg-white">
          <tr>
            <th scope="col"></th>
            <th scope="col" className="font-inter py-4 text-base font-normal">
              Taxpayers
            </th>
            <th scope="col" className="justify-center">
              <button
                type="button"
                className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 flex items-center justify-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-black text-sky-100 ring-gray-300 hover:bg-sky-700 focus:border-gray-900 focus:outline-none focus:ring focus:ring-4"
              >
                Agregar
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((Taxpayers) => (
            <tr
              key={Taxpayers.id}
              className="border border-gray-200 bg-white hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td width={50} className="px-6">
                <Avatar
                  alt={Taxpayers.name}
                  src="../../public/avatars/example_1.jpg"
                  className={classes.avatar}
                />
              </td>
              <th className="py-4">
                <p className="font-inter text-lg font-semibold text-black">
                  {Taxpayers.name}
                </p>
                <p className="font-inter text-base font-light">
                  {Taxpayers.rfc}
                </p>
                <p className="font-inter text-sm font-normal text-[#878787]">
                  {Taxpayers.address}
                </p>
              </th>
              <th className="w-40 justify-center ">
                <button type="button" className="hover:text-sky-700">
                  Eliminar
                </button>
                <button type="button" className="hover:text-sky-700">
                  Editar
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Tabla() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/taxpayer")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  // Manejo de errores cuando se tarda en hacer la conexión con la bd
  if (isLoading) return <p>Loading...</p>;
  // Manejo de errores cuando no hay información disponible
  if (!data) return <p>No profile data</p>;
  return (
    <section className="bg-gray-50 p-3 dark:bg-gray-900 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="p-4 md:space-x-4 md:space-y-0">
          <TaxpayersItem data={data} />
        </div>
      </div>
    </section>
  );
}
