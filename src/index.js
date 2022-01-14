import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { TransactionProvider } from "./context/TransactionContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <TransactionProvider>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </TransactionProvider>,
    document.getElementById("root")
);
