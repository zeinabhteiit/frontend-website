 //import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import "./App.css";

// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Production from "./pages/Production";
// import "./styles/Global.css";

function App() {
  
  //  console.log("App component is running...");

  return (
    
    //  <Router>  
     // <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      // </Router>  
  );
}

export default App;
