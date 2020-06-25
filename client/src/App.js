import React from 'react';
import Consignors from './components/consignors/Consignors';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

      <Route 
        path="/consignors"
        component={Consignors}
      />

    </div>
  );
}

export default App;
