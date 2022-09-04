import React, { useState, useMemo } from 'react'
import { Link } from "react-router-dom";
import './stylesheets/UserInfo.css'
import RepositoryItem from './RepositoryItem'

interface UserInfoProps {
  user: any;
  repo: any;
}

export default function UserInfo( {user, repo}: UserInfoProps ) {

  const [repoSearch, setRepoSearch] = useState<string>('');

  const sortedAndSearchedRepos = useMemo( () => {
    return repo.filter( (item: any) => item.name.toLowerCase().includes(repoSearch) )
  }, [repoSearch, repo])

  return (
    <div>
      <div className="user-info">
        <div className="user-info__img-info--wrapper">
          <div className="user-info__img--wrapper">
            <img className='user-info__img' src={user.avatar_url} alt="" />
          </div>
          <div className="user-info__info">
            {user.name 
              ? <p>User Name: {user.name}</p>
              : <p>User Name: *Not Specified*</p>
            }
            {user.email 
              ? <p>User Email: {user.email}</p>
              : <p>User Email: *Not Specified*</p>
            }
            {user.location 
              ? <p>User Location: {user.location}</p>
              : <p>User Location: *Not Specified*</p>
            }
            {user.created_at 
              ? <p>Joined Date: {user.created_at}</p>
              : <p>Joined Date: *Not Specified*</p>
            }
            {user.followers 
              ? <p>User Followers: {user.followers}</p>
              : <p>User Followers: *Not Specified*</p>
            }
            {user.followings 
              ? <p>User Followings: {user.followings}</p>
              : <p>User Followings: *Not Specified*</p>
            }
          </div>
        </div>
        <div className="user-repos">
          <h2>Repository search</h2>
          <input className='repository-search' onChange={ (e) => setRepoSearch(e.target.value) } type="text" />
          {sortedAndSearchedRepos.map((item: any) => <RepositoryItem repository={item} key={item.id}/>)}
        </div>
      </div>
    </div>
  );
}
