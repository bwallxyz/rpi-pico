import logo from './logo.svg';
import './App.css';
import LedButton from './components/LedButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LedButton />
      </header>
    </div>
  );
}

export default App;
