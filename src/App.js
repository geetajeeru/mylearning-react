import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Users from './components/Users';
import store from "./store";
import Todos from './components/Todos';
import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/users" component={Users}/>
          <Route exact path="/users/:id/todos" component={Todos}/>
        </Router>
    </Provider>
  );
}

export default App;
