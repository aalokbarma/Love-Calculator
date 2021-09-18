import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Result from './Result';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import Login2 from './Login2';

function App() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   db.collection('userInfo').onSnapshot(snapshot => {
  //     setProducts(snapshot.docs.map(doc => ({ id: doc.id, product: doc.data() })))
  //   })
  // }, [])
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = "/login">
            <Login />
          </Route>
          <Route exact path = "/login2">
            <Login2 />
          </Route>
          <Route exact path = "/result">
            <Result />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
