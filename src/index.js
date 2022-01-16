import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { TransactionProvider } from "./context/TransactionContext";

import { Provider as AlertProvider } from "react-alert";
import Alert from "./components/ui/Alert";
// import AlertTemplate from "react-alert-template-basic";

ReactDOM.render(
    <AlertProvider template={Alert}>
        <TransactionProvider>
            <BrowserRouter>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </BrowserRouter>
        </TransactionProvider>
    </AlertProvider>,
    document.getElementById("root")
);
