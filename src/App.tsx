import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </div>
  );
}

export default App;
