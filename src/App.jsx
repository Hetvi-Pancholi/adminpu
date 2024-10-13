import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/Admin";
import React, { useState } from "react";

function App() {
  let [isLogin,setLogin]=useState(true);

  if(!isLogin) {
    return(<Login setLogin={setLogin}/>)
  }
  return (
    <>
      <Navbar isLogin={isLogin} setLogin={setLogin} />
      <Admin />
      <Footer />
    </>
  );
}

export default App;
