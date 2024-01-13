import logo from './logo.svg';
import './App.css';
import Stopwatch from './components/Stopwatch'
import { useEffect } from 'react';
import { gapi } from 'gapi-script'
import HomePage from './components/home/homepage';


function App() {

  // useEffect(() => {
  //   function start() { 
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: ""
  //     })
  //   };

  //   gapi.load('client:auth2', start);
  // });

  return (

    <div className="App">
      <Stopwatch/>
      <HomePage/>
    </div>
  );
}

export default App;