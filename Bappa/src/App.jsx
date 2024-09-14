import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import SlideBar from "./Components/SlideBar";
import GaneshChaturthi from "./Components/GaneshChaturthi";
import GaneshChaturthiVideo from "./Components/GaneshChaturthiVideo";
import BappaPhotos from "./Components/BappaPhotos";
import Footer from "./Components/Footer";
import About from "./Components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <Nav />
      <SlideBar />

      <About />
      <GaneshChaturthi />
      <GaneshChaturthiVideo />
      <BappaPhotos />
      <Footer />
    </>
  );
}

export default App;
