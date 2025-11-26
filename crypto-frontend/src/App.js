import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import List from './List';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav style={{ padding: '20px', backgroundColor: '#282c34', color: 'white' }}>
          <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/list" style={{ color: 'white', textDecoration: 'none' }}>
            List
          </Link>
        </nav>
        
        <Routes>
          <Route path="/" element={
            <div className="App-header">
              <h1>CryptoInfo</h1>
              <p>Welcome to CryptoInfo Application</p>
              <Link to="/list" style={{ color: '#61dafb', textDecoration: 'none' }}>
                View Cryptocurrency List
              </Link>
            </div>
          } />
          <Route path="/list" element={<List />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
