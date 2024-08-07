import "./App.css";
import { Header } from "./Components/Menu";
import { Collections, CreateSell, Footer, Hero, JoinUs } from "./Components/Sections";

function App() {
  return (
    <div className="App container">
      <div className="fill-left">
        <Header />
      </div>

      <div className="mx-0 ml-5 sm:mx-11 md:mx-[120px] border-l border-l-[#D9D9D9]">
        <Hero />
      </div>

      <div className="fill-left">
        <Collections />
        <CreateSell />
        <JoinUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
