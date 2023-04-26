import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Classes from "./Components/Classes";
import AboutUs from "./Components/AboutUs";
import Blogs from "./Components/Blogs/indedx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./Components/Team";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      
      <div className="main-container">
        <div >
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route />
              <Route path="/home" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/Team" element={<Team />} />
            </Routes>
            <Footer />
          </BrowserRouter>
          
        </div>
      </div>
    </>
  );
}

export default App;
