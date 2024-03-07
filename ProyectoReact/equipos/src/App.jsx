import { Header } from "./components/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
  return (
    <>
      <Header title="mi pagina web" show={false} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
