import React, { useState, useEffect } from 'react';
import './style.css';

function DevForm({ onSubmit }){

  const [gitihub_username, setGitihubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude); 
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleSubmit(e){
    e.preventDefault();
      
    await onSubmit({
      gitihub_username,
      techs,
      latitude,
      longitude,
    });

    setTechs('');
    setGitihubUsername('');
  }

  return(
  <form onSubmit={handleSubmit}>

    <div className="input-block">
      <label htmlFor="gitihub_username">Usuário do github</label>
      <input 
        name="gitihub_username" 
        id="gitihub_username" 
        required 
        value={gitihub_username}
        onChange={e => setGitihubUsername(e.target.value)}
      />
    </div>

    <div className="input-block">
      <label htmlFor="techs">Tecnologias</label>
      <input 
      name="techs" 
      id="techs" 
      required 
      value={techs}
      onChange={e => setTechs(e.target.value)}
      />
    </div>

    <div className="input-group">

      <div className="input-block">
        <label htmlFor="latitude">latitude</label>
        <input 
          type="number" 
          name="latitude" 
          id="latitude" 
          required 
          value={latitude}
          onChange={e => setLatitude(e.target.value)}
        />
        
      </div>

      <div className="input-block">
        <label htmlFor="longitude">longitude</label>
        <input 
          type="number" 
          name="longitude" 
          id="longitude" 
          required 
          value={longitude}
          onChange={e => setLongitude(e.target.value)}
        />
      </div>

    </div>

    <button type="submit">Salvar</button>

  </form>
  );
}

export default DevForm;