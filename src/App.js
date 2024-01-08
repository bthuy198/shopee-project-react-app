import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <i className="fa-solid fa-magnifying-glass"></i>
        {/* <MyButton content={<i className="fa-solid fa-magnifying-glass"></i>}/>
        <MyButton content={<i className="fa-solid fa-magnifying-glass"></i>}/>
        <MyButton content={<i className="fa-solid fa-magnifying-glass"></i>}/>
        <MyButton content={<i className="fa-solid fa-magnifying-glass"></i>}/> */}
        <p>Hello world</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
