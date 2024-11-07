import {Route, Routes,  BrowserRouter} from "react-router-dom";
import {AddIllustration} from "./components/admin/AddIllustration";
import {EditIllustration} from "./components/admin/EditIllustration";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import LogInPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignUpPage from "./pages/SignUpPage";
import Footer from "./components/common/Footer.jsx";
import {MultiContextProvider} from "./utils/MultiContext.jsx";
import {GlobalContext} from "./context/globalStateContext.jsx";
import {ShopContext} from "./context/shopContext.jsx";
import Navbar from "./components/common/Navbar.jsx";


const multiContextMap =     {GlobalContext,ShopContext}


const App = () => {
    return (
        <>
            <div>
                    <div className="flex flex-col h-screen justify-between">
                        <BrowserRouter>
                            <MultiContextProvider map={multiContextMap}>
                               <div>
                                <Navbar/>
                                <Routes>
                                    <Route path="/" element={<HomePage/>}/>
                                    <Route path="/about" element={<AboutPage/>}/>
                                    <Route path="/contact" element={<Contact/>}/>
                                    <Route path="/login" element={<LogInPage/>}/>
                                    <Route path="/signUp" element={<SignUpPage/>}/>
                                    <Route path="/admin" element={<AdminPage/>}/>
                                    <Route path="/add" element={<AddIllustration/>}/>
                                    <Route path="/edit/:editId" element={<EditIllustration/>}/>
                                    <Route path="/illustrations/:illustrationId" element={<ItemDetailsPage/>}/>
                                    <Route path="*" element={<NotFoundPage/>}/>
                            </Routes>
                               </div>
                            </MultiContextProvider>
                        <Footer/>
                        </BrowserRouter>
                    </div>
            </div>
        </>
    )
}

export default App
