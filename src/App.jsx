import { useState, useEffect } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem("patients")) ?? [];
      setPatients(patientsLS);
    };
    getLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((pat) => pat.id != id);
    setPatients(updatedPatients);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          setPatients={setPatients}
          patients={patients}
          patient={patient}
          setPatient={setPatient}
        />
        <ListadoPacientes
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
