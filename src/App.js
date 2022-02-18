import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import  Cards from './components/Cards'
import Bottombar from './components/Bottombar';

function App() {
 const setScreen = useState(0);
 console.log(setScreen)
      return (<div>
      <NavBar/>
      <Cards Screen={setScreen[0]}/>
      <Bottombar configScreen={setScreen}/>
      </div> 
         )}
export default App;
