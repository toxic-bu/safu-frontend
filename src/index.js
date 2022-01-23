import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { TransactionProvider } from "./context/TransactionContext";
import { ThemeContextProvider } from "./context/ThemeModeContext";

import { Provider as AlertProvider } from "react-alert";
import Alert from "./components/ui/Alert";
// import AlertTemplate from "react-alert-template-basic";

ReactDOM.render(
    <BrowserRouter>
        <AlertProvider template={Alert}>
            <TransactionProvider>
                <ThemeContextProvider>
                    <React.StrictMode>
                        <App />
                    </React.StrictMode>
                </ThemeContextProvider>
            </TransactionProvider>
        </AlertProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
