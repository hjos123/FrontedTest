import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import AppState from './context/appState';
import Routes from './routes';

function App() {
  return (
  	<AppState>
	    <Router>
	      	<Routes />
	    </Router>
    </AppState>
  );
}

export default App;
