import Navigation from "./navigation";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Technologies from "./components/technologies/technologies";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
function App() {
  useEffect(() => {
    AOS.init({ easing: "ease-out-cubic", duration: 600 });
    AOS.refresh();
  }, []);
  return (
    <div className="mainApp">
      <Header />
      <Body />
      <About />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
