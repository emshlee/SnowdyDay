import logo from './logo.svg';
import './App.css';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Stopwatch from './components/Stopwatch'
import { useEffect } from 'react';
import { gapi } from 'gapi-script'

const clientId = '314682349715-vvl2mgqregs4hokcnsmkhu8s796ru1da.apps.googleusercontent.com';


function App() {

  useEffect(() => {
    function start() { 
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  });

  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
      <Stopwatch/>
    </div>
  );
}

export default App;
