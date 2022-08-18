import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './views/Home/Home';
import PokeDetail from './views/PokeDetail/PokeDetail';

function App() {

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
