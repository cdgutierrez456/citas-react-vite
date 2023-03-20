import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <Form />
      <ListadoPacientes />
    </div>
  );
}

export default App;
