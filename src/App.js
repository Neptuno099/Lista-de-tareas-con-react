import './App.css';
import ListaDeTarea from "./Componentes/ListaDeTareas";

function App() {
  return (
    <div className="App">
      <div className="aplicacion-tareas">
        <div className='tareas-lista-principal'>
          <h1>Mis tareas</h1>
          <ListaDeTarea/>
        </div>

      </div>

    </div>
  );
}

export default App;
