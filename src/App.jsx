import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfLinks from './components/ListOfLinks';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {


  render() {
    return <div className="App">
        <Header title="React Links App"/>
        <ListOfLinks />
        <Footer footerText="Testing and Playing c/o JPinx"/>
      </div>
  }
}

export default App;
