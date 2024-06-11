import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalContextProvider } from './context/globalStateContext.jsx'
import './index.css'
import {ShopContextProvider} from "./context/shopContext.jsx";
import {APIContextProvider} from "./context/apiContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
        <ShopContextProvider>
            <APIContextProvider>
                <App />
            </APIContextProvider>
        </ShopContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>
)
