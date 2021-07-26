import './App.css';
import PokemonProvider from './context/pokemons/Provider';
import Routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <PokemonProvider>
      <Routes />
    </PokemonProvider>
  );
}

export default App;
