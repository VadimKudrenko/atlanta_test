import React, { useState, useEffect } from 'react'
import './stylesheet/Home.css'
// import { Link } from "react-router-dom"
import useDebounce from '../../hooks/useDebounce'
import axios from 'axios';
// import SearcherInput from './SearcherInput'
// import SearchersList from './SearchersList'
import SearcherListItem from './SearcherListItem';
import { useLocalStorage } from '../../hooks/useLocalStorage'

interface HomeProps {
  getUser: any;
  getRepo: any;
}

export default function Home( {getUser, getRepo}: HomeProps ) {

  const [searcherName, setSearcherName] = useLocalStorage('', 'searcherName');
  const [foundUsers, setFoundUsers] = useLocalStorage([], 'foundUsers');
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearch = useDebounce(searcherName, 500);

  useEffect(
    () => {
      if (debouncedSearch) {
        setIsSearching(true);
        searchUsers(debouncedSearch).then( ( results: any ) => {
          setIsSearching(false);
          setFoundUsers(results.data.items);
        });
        
      } else {
        setFoundUsers([]);
      }
    },

    [debouncedSearch, setFoundUsers]
  );

  async function searchUsers(userName: string) {
    return await axios.get('https://api.github.com/search/users?q=' + userName );
  }

  function getUserInfo (user: any) {
    getUser(user)
    
  }

  function getUserRepo(repo: any) {
    getRepo(repo);
  }

  return (
    <div>
      <input
        onChange={ e => setSearcherName(e.target.value) }
        className='home__input' 
        type='text'
        value={searcherName} 
      />
      
      { isSearching
      ? <div>Loading....</div>
      : <div className='searcher-list'>
          {foundUsers.map((item: any) => <SearcherListItem userRepo={getUserRepo} userInfo={getUserInfo} user={item} key={item.id}/>)}
        </div>
      }
    </div>
  );
}
