import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './views/Home/Home';
import PokeDetail from './views/PokeDetail/PokeDetail';
import Providers from './context/Providers';

function App() {

  return (
    <div className="App">
      <Providers>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<PokeDetail />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404 not found :c</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </Providers>
    </div>
  );
}

export default App;
