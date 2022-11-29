import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import 'bootswatch/dist/lux/bootstrap.min.css';
// Solo hay que remplazar la plabra slate con la del tema que nos guste. (Debe ir en minusculas para nmo tener probleas al desplegar la app.)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
