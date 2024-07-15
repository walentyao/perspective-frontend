import React from 'react';
import ReactDOM from 'react-dom/client';
import '@app/styles/index.scss';
import { App } from './app/App.tsx';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-amber/theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <PrimeReactProvider>
            <App />
        </PrimeReactProvider>
    </React.StrictMode>,
);
