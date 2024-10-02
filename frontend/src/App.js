import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

function App() {
  return (
    <div>
      <ClientOnly>
        <Modal actionLabel='submit' title='Hello world' />
        <Navbar />
      </ClientOnly>
    </div>
  );
}

export default App;
