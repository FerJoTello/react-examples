import { useState } from 'react';

function Conditional() {

    const [name, setName] = useState("Fernando");
    const [age, setAge] = useState(20);
    const [isLogged, setIsLogged] = useState(false);

    const handleEnviarClick = () => setIsLogged(true);

    return (
        <div className="Conditional">
            <label>
                Nombre
                <input value={name} onChange={({ target: { value } }) => { setName(value) }}></input>
            </label>
            <br />
            <br />
            <label>
                Edad
                <input value={age} onChange={({ target: { value } }) => { setAge(value) }}></input>
            </label>
            <br />
            <br />
            <button onClick={handleEnviarClick}>Enviar</button>
            {isLogged ? <h2>Datos enviados1</h2> : undefined}
            {isLogged && <h2>Datos enviados2</h2>}
        </div>
    );
}

export default Conditional;
