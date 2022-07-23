import React from "react";
import NavBar from "./components/NavBar";
import SearchBox from "./components/searchBox"
import Card from "./UI/Card"
import './App.css';

function App() {

  return (
    <Card>
      <NavBar />
      <SearchBox  />
    </Card>
  );
}

export default App;
