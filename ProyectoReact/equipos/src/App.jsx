import { Header } from "./components/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header title="mi pagina web" show={true}>
        <h1>Esto es un header</h1>
        <Footer />
      </Header>
      <section>
        <p>Este es el section</p>
      </section>
    </>
  );
}

export default App;
