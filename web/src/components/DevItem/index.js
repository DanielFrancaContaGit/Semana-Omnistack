import React from 'react';
import './style.css';

function DevItam({ dev }){
  return(
    <li className="dev-item">
      <header>
          <img src={dev.avatar_url} alt={dev.name}/>
          <div className="user-info">
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
          </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.gitihub_username}`}>Acessar perfil do github</a>
    </li>
  );
}

export default DevItam;