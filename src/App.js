import "./App.css";
import Navbar from "./Components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer.js";
import ServiceFrontend from "./Components/ServiceFrontend.js";

function App() {
  return (
    <BrowserRouter basename="/AhujaEnterprise">
      <Navbar />
      <Routes>
        <Route exact='true' path="/services" element={<Services />}></Route>
        <Route exact='true' path="/contact" element={<Contact />}></Route>
        <Route exact='true' path="/AhujaEnterprise" element={<Home />}></Route>
        <Route exact='true' path="/about" element={<About />}></Route>
        <Route path="*" element={<Home />}></Route>
        <Route exact='true' path="/services/frontend" element={<ServiceFrontend />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
