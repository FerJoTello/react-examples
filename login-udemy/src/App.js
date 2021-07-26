import { useState, Component } from 'react';
import './App.css';

/*
POR CLASE

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailChange = ({ target: { value } }) => this.setState({ email: value });
  handlePasswordChange = ({ target: { value } }) => this.setState({ password: value });

  printEmailAndPassword() {
    console.log(`Email: ${this.state.email}`);
    console.log(`Password: ${this.state.password}`);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.printEmailAndPassword();
  }
  render() {
    return (<div className="App">
      <form onSubmit={this.handleFormSubmit}>
        <h2>
          Iniciar Sesión
        </h2>
        <label>
          Correo
          <input type="email" value={this.state.email} onChange={this.handleEmailChange}></input>
        </label>
        <label>
          Password
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        </label>
        <button type="submit">
          Enviar
        </button>
      </form>
    </div>
    );
  }
}
*/


/*
POR HOOK (FUNCION)
*/
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = ({ target: { value } }) => setEmail(value);
  const handlePasswordChange = ({ target: { value } }) => setPassword(value);

  function printEmailAndPassword() {
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    printEmailAndPassword();
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2>
          Iniciar Sesión
        </h2>
        <label>
          Correo
          <input type="email" value={email} onChange={handleEmailChange}></input>
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={handlePasswordChange}></input>
        </label>
        <button type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
