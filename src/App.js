import "./App.css";
import Header from "./Components/Menu/Header";
import Collections from "./Components/Sections/Collections";
import CreateSell from "./Components/Sections/CreateSell";
import Footer from "./Components/Sections/Footer";
import Hero from "./Components/Sections/Hero";
import JoinUs from "./Components/Sections/JoinUs";

function App() {
  return (
    <div className="App container">
      <div className="fill-left">
        <Header />
      </div>

      <div className="mx-0 ml-5 sm:mx-11 md:mx-[120px] border-l border-l-[#D9D9D9]"></div>

      <div className="fill-left">
        <Hero />
        <Collections />
        <CreateSell />
        <JoinUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
