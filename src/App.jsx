import { Link, Route, Routes } from "react-router-dom";
import { MdContactPage } from "react-icons/md";
import { FaList, FaInfo, FaHome } from "react-icons/fa";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FaHome />
              <span className="padding-left-2">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaInfo />
              <span className="padding-left-2">About</span>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <FaList />
              <span className="padding-left-2">Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <MdContactPage />
              <span className="padding-left-2">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
