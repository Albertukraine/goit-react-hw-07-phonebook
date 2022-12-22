import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import {Provider} from 'react-redux';
import {store, persistor} from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

console.log(React);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
     <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
       <App />
      </Provider>
     </PersistGate>
  </React.StrictMode>
);
