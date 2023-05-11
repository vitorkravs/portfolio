import './App.css';

import NavBar from './components/NavBar/NavBar'
import Inicio from './components/Inicio/Inicio';
import Tecnologias from './components/Tecnologias/Tecnologias';
import Projetos from './components/Projetos/Projetos';
import Contato from './components/Contato/Contato';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Inicio/>
      <Tecnologias/>
      <Projetos/>
      <Contato/>
    </div>
  );
}

export default App;
