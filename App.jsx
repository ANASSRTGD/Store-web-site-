import { useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} />

      {currentPage === "home" && <Home />}
      {currentPage === "shop" && <Shop />}
      {currentPage === "contact" && <Contact />}

      <Footer />
    </div>
  );
}

export default App;
