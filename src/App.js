import React from 'react';
import Header from './components/Header';
import routes from './routes';
import './scss/main.scss'




function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
