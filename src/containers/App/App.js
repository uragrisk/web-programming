import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GlobalContext from "../../contexts/GlobalState";
import { cups } from "../../contexts/GlobalState";
import { useState } from 'react';


const App = () => {
  const [dataRender, setDataRender] = useState(cups);
  return (
    <GlobalContext.Provider value = {{
      dataRender,
      setDataRender
    }}>
      <Header></Header>
      <Footer></Footer>
    </GlobalContext.Provider>
  );
};

export default App;
