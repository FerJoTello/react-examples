import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState("Fernando");
  const [age, setAge] = useState(20);

  /** componentDidUpdate
   * cuando cualquier parte cambia
   */
  useEffect(() => {
    console.log("didUpdate effect")
  });

  /** componentDidMount
   * cuando se inicializa el componente
   */
  useEffect(() => {
    console.log("didMount effect");

    return () =>{
      console.log("willUnmount effect")
    }
  }, []);

  /**
   * para cambios específicos de los valores 
   * en el 2do parámetro que está en el arreglo[]
   */
  useEffect(() => {
    console.log("name o age cambió")
  }, [name, age]);

  useEffect(() => {
    console.log("solo name cambió")
  }, [name]);

  useEffect(() => {
    console.log("solo age cambió")
  }, [age]);

  return (
    <div className="App">
      <input value={name} onChange={({ target: { value } }) => { setName(value) }}></input>
      <input value={age} onChange={({ target: { value } }) => { setAge(value) }}></input>
    </div>
  );
}

export default App;
