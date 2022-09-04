import React from 'react'
import { Link } from "react-router-dom"

import './stylesheet/SearcherListItem.css'
import axios from 'axios';
// import useDebounce from '../../hooks/useDebounce'


interface SearcherListItemProps {
  user: any;
  userInfo: any;
  userRepo: any;
}

export default function SearcherListItem({user, userInfo, userRepo}: SearcherListItemProps) {

  async function getUserInfo(userName: string) {
    const user = await axios.get('https://api.github.com/users/' + userName);
    userInfo(user.data);
  }

  async function getUserRepo(url: string) {
    const repo = await axios.get(url);
    userRepo(repo.data);
  }

  return (
    <Link onClick={() => {getUserInfo(user.login); getUserRepo(user.repos_url)}}  to="/user-info">
      <div className='searcher-list__item'>
        <div className='searcher-list__item-user-avatar-name--wrapper'>
          <div className='searcher-list__item-user-avatar--wrapper'>
            <img className='searcher-list__item-user-avatar' src={user.avatar_url} alt="" />
          </div>
          <div className='searcher-list__item-user-name'><p>{user.login}</p></div>
        </div>
        <div className='searcher-list__item-user-repo--wrapper'>
          <p className='searcher-list__item-user-repo'>Repo #{}</p>
        </div>
      </div>
    </Link>
  )
}
