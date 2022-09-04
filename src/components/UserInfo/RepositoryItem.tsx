import React from 'react'
import './stylesheets/RepositoryItem.css';

interface RepositoryItemProps {
  repository: any;
}

export default function RepositoryItem( {repository}: RepositoryItemProps ) {


  //стилизировать блоки с репозиториями и сделать поиск по ним
  // console.log(repository)

  return (
    <a className='repository-item' href={repository.html_url}>
      <div className="repository-item__name-wrapper">
        <p className="repository-item__name">{repository.name}</p>
      </div>
      <div className="repository-item__info-wrapper">
        <p className="repository-item__info-forks">Forks: {repository.forks_count}</p>
        <p className="repository-item__info-stars">Stars: {repository.stargazers_count}</p>
      </div>
    </a>
  )
}
