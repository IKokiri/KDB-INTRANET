import React from 'react';
import './App.css';
import {MenuNav} from './components/nav/MenuNav'
import firebase from './firebase'
import {Panel} from './components/panel/Panel'
import {Home} from './components/home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {

  React.useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken()
    }).then((data)=>{
        console.warn("token",data)
    })
  })
  return (
    <div className="App">
      <Router>
        <MenuNav></MenuNav>

        <div>
       

        <Switch>
          <Route path="/topics">
            <Panel />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

      </Router>
      {/* <MenuNav></MenuNav>
      <Panel></Panel> */}
    </div>
  );
}

export default App;
