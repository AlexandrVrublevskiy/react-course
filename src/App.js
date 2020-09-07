import React from 'react';
import './css/App.css'
import Header from './components/Header/Header.js';
import Profile from './components/Profile/Profile.js';
import NavBar from './components/NavBar/NavBar.js';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';



function App(props) {
  return (
    <BrowserRouter>
      <div className="App app-wraper">
        <Header />
        <NavBar />
        <div className='app-wraper-content'>
          {/*<Route path='/profile' component={Profile} />
          <Route path='/massages' component={Dialogs} />*/}
          <Route path='/profile' render={() => <Profile messages={props.postMessages} />} />
          <Route path='/massages' render={() => <Dialogs users={props.users} messages={props.messages}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
