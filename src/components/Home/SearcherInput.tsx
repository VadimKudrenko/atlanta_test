import React from 'react'
import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage'


export default function SearcherInput( ) {

  const [searcherName, setSearcherName] = useLocalStorage([], 'searcherName');

  const [isSearching, setIsSeearching] = useState(false);

  const [user, setUser] = useState({});

  return (
    <div>
      <input
        onChange={ e => setSearcherName(e.target.value) }
        className='home__input' 
        type='text'
        value={searcherName} 
      />
      <button onClick={()=> console.log(searcherName)}>Find</button>
    </div>
  )
}

