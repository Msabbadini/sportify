import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/sass/main.scss';
import {ContextProvider} from "@/utils/context";
import App from "@/app"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
);

