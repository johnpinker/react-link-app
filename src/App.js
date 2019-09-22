import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfLinks from './ListOfLinks';
import LinkStore from './LinkStore';

class App extends React.Component {


  render() {
    return <div className="App">
      <header className="App-header">
        <h1>Link Manager</h1>
      </header>
      <ListOfLinks />
      <footer className="App-footer">
        Testing and Playing c/o JPinx
      </footer>
    </div>
  }
}

export default App;
