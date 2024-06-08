import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Order from "./components/Order";
import Event from "./components/Event";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Order />
      <Event />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
