/**
 * Components :
 *    Secara Konsep Component itu seperti JS function. Yang dimana
 *    dia itu dapat menerima props (data dari parent) dan
 *    mengembalikkan element React yang akan ditampilkan di layar.
 */

import Home from './pages/Home';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Todo React App</h2>
        <Home />
      </header>
    </div>
  );
}

export default App;
