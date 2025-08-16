import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FloatingButtons from "./comps/FloatingButtons";
import Navbar from "./comps/Navbar2";
import { useScrollToTop } from "./hooks/useScrollToTop";
import About from "./Pages/About";
import Articles from "./Pages/Articles";
import CBTTherapy from "./Pages/CBTTherapy";
import Certificates from "./Pages/Certificates";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Home from "./Pages/Home";
import {
  default as Logotherapy,
  default as LogotherapyArticle,
} from "./Pages/LogotherapyArticle";
import Privacy from "./Pages/Privacy";
import Services from "./Pages/Services";

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
        {/* <Route path="testimonials" element={<Testimonials />} /> */}
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="logotherapy-article" element={<LogotherapyArticle />} />
        <Route path="cbt-therapy" element={<CBTTherapy />} />
        <Route path="certificates" element={<Certificates />} />
      </Routes>

      <FloatingButtons />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
