import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/style.scss";
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';


const RootComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(<RootComponent />);