import React from 'react';
import './App.css';
import {MenuNav} from './components/nav/MenuNav'
import {Panel} from './components/panel/Panel'
import firebase from './firebase'

function App() {

  

  React.useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken()
    }).then((data)=>{
        console.warn("token",data)
        document.querySelector("#key").innerHTML = data;
    })
  })
  return (
    <div className="App">
      <MenuNav></MenuNav>
      <Panel></Panel>
      <div id="key"></div>
    </div>
  );
}

export default App;
