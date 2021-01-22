import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage';
import 'rsuite/dist/styles/rsuite-default.css';


const App = () => {
  return (
    <Homepage />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);