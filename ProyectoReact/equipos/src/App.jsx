import { Header } from "./components/Header";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import "./App.css";


function App() {
  return (
    <>
      <Header title="mi pagina web" show={false}/>
        <Section/>
      <Footer />
    </>
  );
}

export default App;
