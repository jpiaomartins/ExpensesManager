import React from "react";
import ReactDOM from "react-dom/client";
import RootApp from "./containers/RootApp/RootApp.jsx";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RootApp />
    </React.StrictMode>
);