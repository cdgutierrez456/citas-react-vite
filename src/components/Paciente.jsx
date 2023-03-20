const Paciente = () => {
  return (
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Juan Sin Miedo</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        E-mail: {""}
        <span className="font-normal normal-case">coreo@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">10 Dec 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          perferendis dolorum officiis nisi? Veritatis laudantium voluptates
          tempora quis fugit repudiandae!
        </span>
      </p>
    </div>
  );
};

export default Paciente;
