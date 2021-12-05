import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GlobalContext from "../../contexts/GlobalState";
import { useState } from 'react';


const App = () => {
  const [dataRender, setDataRender] = useState([]);
  const [filters, setFilters] =  useState({});
  const [cups, setCups] =  useState([]);
  return (
    <GlobalContext.Provider value = {{
      dataRender,
      setDataRender,
      filters,
      setFilters,
      cups, 
      setCups
    }}>
      <Header></Header>
      <Footer></Footer>
    </GlobalContext.Provider>
  );
};

export default App;
