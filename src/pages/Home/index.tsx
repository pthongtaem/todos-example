import React from 'react';
import { Layout } from 'antd';
import logo from './logo.png';
import './style.css';

const App = () => {
  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/pages/Home/index.ts</code> and save to reload.
          </p>
          <a
            href="https://origin.co.th"
            target="_blank"
            rel="noopener noreferrer"
          >
            Origin Property
          </a>
        </header>
      </div>
    </Layout>
  );
};

export default App;
