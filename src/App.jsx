import {Route, Routes} from "react-router-dom";
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
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import {ShopContextProvider} from "./context/shopContext.jsx";
import {GlobalContextProvider} from "./context/globalStateContext.jsx";
import {APIContextProvider} from "./context/apiContext.jsx";

const App = () => {
    return (
        <>
            <div>
                <GlobalContextProvider>
                    <APIContextProvider>
                        <ShopContextProvider>
                            <Navbar/>
                            <div className="flex flex-col h-screen justify-between">
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
                                <Footer/>
                            </div>
                        </ShopContextProvider>
                    </APIContextProvider>
                </GlobalContextProvider>
            </div>
        </>
    )
}

export default App
