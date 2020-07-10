import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

// For State Management Using Context API
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';

// Components
import Navbar from './components/layout/Navbar';
import About from './components/pages/About'
import Home from './components/pages/Home'

function App() {
  return (
    <AuthState>
    <ContactState>
      <Router>
        <div className="App">
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
            </Switch>
          </div>
        </div>
      </Router>
    </ContactState>
    </AuthState>
  );
}

export default App;
