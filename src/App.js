import logo from './logo.svg';
import './App.css';
import GameContainer from './components/GameContainer';
import GameController from './components/GameController';

function App() {
  return (
    <div className="App">
      <h1>
        CSM Memory Game
      </h1>
      <GameContainer/>
    </div>
  );
}

export default App;
