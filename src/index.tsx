import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.scss";
import Union from './union.svg';

const App: React.FC = () => {
  return <h1>Hello World!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(<App />);