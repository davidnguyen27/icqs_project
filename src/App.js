import React from 'react';
import Login from './components/login/login';
import './components/login/login.css';
import Body2 from './components/body/Body2';
import './components/body/Body.css';
import Search from './components/Search/Search';
//import Nav from './components/Nav/Nav';

function App() {
  return (
<div className="App">
      <Search />
      <Login />
      <Body2 />
    </div>
  );
}

export default App;
