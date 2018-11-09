import React, { Component } from 'react';
import './App.css';
import Router from './routes'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
            <Router />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
