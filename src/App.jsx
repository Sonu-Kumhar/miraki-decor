import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// You’ll add more pages later
const About = () => <div className="pt-20 text-center">About Page</div>;
const Services = () => <div className="pt-20 text-center">Services Page</div>;
const Projects = () => <div className="pt-20 text-center">Projects Page</div>;
const Blogs = () => <div className="pt-20 text-center">Blogs Page</div>;
const Contact = () => <div className="pt-20 text-center">Contact Page</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
