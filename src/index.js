import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './App';
import  { store , persistor } from './components/ReduxTookit/Store';
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading"}  persistor={persistor}>

      <App />

      </PersistGate>
    

    </Provider>
  
  </React.StrictMode>
);
