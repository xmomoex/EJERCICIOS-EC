import { Header } from "./components/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header title="mi pagina web" show={false} />

      <Footer />
    </>
  );
}

export default App;
