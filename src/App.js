import React from "react";
import Container from "./components/container/Container";
import Section from "./components/Section/Section"
import NavPanel from "./components/navPanel/NavPanel";
import HeaderLogo from "./components/headerLogo/HeaderLogo";
import Footer from "./components/Footer/Footer";
import MainFooter from "./components/mainFooter/MainFooter";

function App() {
  return (
    <>
      <Container>
        <NavPanel />
        <HeaderLogo imageSource="Images/Fundo 01.png" logo="Images/Logo.png" />
        <MainFooter />
        <Section />
        <Footer />
      </Container>
    </>
  );
}

export default App;
