import './App.css';
import React from 'react';
import {Home , About, Experience, Projects} from './pages'
import {NavBar} from "./components"
import {Switch , Route} from "react-router-dom";

function App() {
  return (
   <>

   <NavBar/>
   <Switch>
     <Route exact path="/"><Home/></Route>
     <Route path= "/About"><About/></Route>
     <Route path= "/Experience"><Experience/></Route>
     <Route path= "/Projects"><Projects/></Route>
     </Switch>
   </>
  );
}

export default App;
