import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalContextProvider } from './context/globalStateContext.jsx'
import './index.css'
import {APIContextProvider} from "./context/apiContext.jsx";
import {ShopContextProvider} from "./context/shopContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
        <APIContextProvider>
            <ShopContextProvider>
                <App />
            </ShopContextProvider>
        </APIContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>
)
