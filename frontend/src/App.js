import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

function App() {
  return (
    <div>
      <ClientOnly>
        <ToasterProvider/>
        <RegisterModal />
        <Navbar />
      </ClientOnly>
    </div>
  );
}

export default App;
