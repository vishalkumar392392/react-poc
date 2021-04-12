import React, { Component } from "react";
import Persons from './Persons/Persons'
import SearchAppBar from './components/Navabar/Navbar'
class App extends Component {
  // Added comment
  render() {
   
    return (
     <div>
      <SearchAppBar/>
     <Persons/>
     </div>
    );
  }
}

export default App;
