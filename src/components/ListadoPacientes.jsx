import Paciente from "./Paciente";

const ListadoPacientes = ({ patients }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold text-xl">
          Pacientes y citas
        </span>
      </p>

      {patients.map((patient) => (
        <Paciente key={patient.id} patient={patient} />
      ))}
    </div>
  );
};

export default ListadoPacientes;
