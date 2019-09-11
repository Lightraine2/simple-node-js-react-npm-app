import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          So this is just the React default app home page. Using this as an example for CI/CD integration with security tools. Once the pipeline is set up, I'll throw in some intentional vulnerabilities to demonstrate alerting capabilities and potential build-breaking problems.
          <br></br><br></br>
          Edit <code>src/App.js</code> and save to reload.
          <br></br><br></br>
          The pipeline should look as follows:
          <br></br><br></br>
          Git push > Jenkins Pipeline > Code Review > Burp Scan > Deploy to Artifactory/AppServer
      
        </p>
      </div>
    );
  }
}

export default App;
