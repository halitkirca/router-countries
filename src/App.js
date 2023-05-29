import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import About from "./pages/about/About";
import "./App.css";

function App() {
  //! burada navbar ve footer demirbaş olmalı, Home, About, Details sayfaları Route etiketleri ile Routes içinde belirlenmeli

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element= {<Home />}/>
          <Route path="/details/:countryName" element= {<Details />}/>
          <Route path="/about" element= {<About />}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
