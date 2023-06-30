import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
           <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Services" exact element={<Services />} />
          <Route path="/Contact" exact element={<Contact />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
