import React from 'react';
import logo from './logo.svg';
import './App.css';

import store from './store'             //add Redux store
import {Provider} from 'react-redux'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        

      </header>
    </div>
  );
}
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

export default App;
