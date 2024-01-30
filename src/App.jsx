import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<AboutMe />} />
        <Route path="/portfolio" element={<AboutMe />} />
        <Route path="/contact" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
