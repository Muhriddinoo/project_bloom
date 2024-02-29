import "./App.css";
import Header from "./component/Header/Header";
import Section from "./component/Section/Section";
import Service from "./component/Service/Service";
import Home from "./component/Home/Home";
import Portfolio from "./component/Portfolio/Portfolio";
import About from "./component/About/About";
import Client from "./component/Client/Client";
import Logo from "./component/Logo/Logo";
import Contact from "./component/Contact/Contact";

function App() {
  return (
    <div className="container mx-auto">
      <Header />;
      <Section />
      <Service />
      <Home />
      <Portfolio />
      <About />
      <Client />
      <Logo />
      <Contact />
    </div>
  );
}

export default App;
