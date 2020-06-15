import React from 'react';
import AllRoute from '../router'
import Scrollbar from '../../components/scrollbar'
import './App.css';


const App = () => { 

  return (
    <div className="App" id='scrool'>
          <AllRoute/>
          <Scrollbar/>
    </div>
  );
}

export default App;
