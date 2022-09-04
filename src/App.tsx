import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from './hooks/useLocalStorage'

import './App.css';
import Home from './components/Home/Home'
import UserInfo from './components/UserInfo/UserInfo'

// interface IUserInfo {
//   login: string;
// }

function App() {

  const [userInfo, setUserInfo] = useLocalStorage([], 'userInfo')
  const [userRepo, setUserRepo] = useLocalStorage([], 'userRepo')

  function getUser (user: any) {
    setUserInfo(user)
  }

  function getRepo(repo: any) {
    setUserRepo(repo)
  }
  
  return (
    <div className='app'>
        <h1>Github Searcher</h1>
        <Routes>
          <Route path='/' element={<Home getUser={getUser} getRepo={getRepo} />}/>
          <Route path='/user-info' element={<UserInfo user={userInfo} repo={userRepo}/>}/>
        </Routes>
    </div>
  );
}

export default App;
