import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "./Pages/About";
import Articles from "./Pages/Articles";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Home from "./Pages/Home2";
import Logotherapy from "./Pages/Logotherapy";
import Privacy from "./Pages/Privacy";
import Services from "./Pages/Services";
import Navbar from "./comps/Navbar";
import FloatingButtons from "./comps/FloatingButtons";
import { useScrollToTop } from "./hooks/useScrollToTop";

const App = () => {
  useScrollToTop();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="logotherapy" element={<Logotherapy />} />
        <Route path="services" element={<Services />} />
        <Route path="articles" element={<Articles />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
      </Routes>
      <FloatingButtons />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
