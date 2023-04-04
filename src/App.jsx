import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [patients, setPatients] = useState([]);
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Form setPatients={setPatients} patients={patients} />
        <ListadoPacientes patients={patients} />
      </div>
    </div>
  );
}

export default App;
