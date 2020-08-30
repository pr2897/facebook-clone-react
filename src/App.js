import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import SideBar from './components/SideBar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <SideBar />
        <Feed />
        <Widgets />
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
