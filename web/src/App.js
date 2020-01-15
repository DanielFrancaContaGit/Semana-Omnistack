import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './sideBar.css';
import './main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

//Os 3 conceitos mais importantes do react 
//1 - Component: É om bloco isolado de html, css e js que não interfere no restante da aplicação.
//2 - Propiedade: Informações que um component PAI passa para um component FILHO.
//3 - Estado: Informações mantidas pelo component (Lembrar: imutabilidade e de importar o useState fom 'react') 

function App() {

  const [devs, setDevs] = useState([]);

  

  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('./devs');

      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data){

    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev=>(
            <DevItem  key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
