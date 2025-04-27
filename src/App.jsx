import {Route, Routes, BrowserRouter} from "react-router-dom";
import {EditIllustration} from "./components/admin/EditIllustration";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import LogInPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignUpPage from "./pages/SignUpPage";
import Footer from "./components/common/Footer.jsx";
import Navbar from "./components/common/Navbar.jsx";
import AddIllustration from "./components/admin/AddIllustration.jsx";
import {CartProvider} from "./context/cart/CartProvider.jsx";
import {IllustrationsProvider} from "./context/admin/IllustrationsProvider.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import RequiredAuth from "./RequireAuth.jsx";

const App = () => {
    return (
        <>
            <div>
                <div className="flex flex-col h-screen justify-between">
                    <IllustrationsProvider>
                        <CartProvider>
                            <BrowserRouter>
                                <div>
                                    <Navbar/>
                                    <Routes>
                                        <Route path="/" element={<HomePage/>}/>
                                        <Route path="/about" element={<AboutPage/>}/>
                                        <Route path="/contact" element={<Contact/>}/>
                                        <Route path="/login" element={<LogInPage/>}/>
                                        <Route path="/signUp" element={<SignUpPage/>}/>
                                        <Route path="/admin" element={
                                            <RequiredAuth>
                                                <AdminPage/>
                                            </RequiredAuth>
                                        }/>
                                        <Route path="/add" element={<AddIllustration/>}/>
                                        <Route path="/edit/:editId" element={<EditIllustration/>}/>
                                        <Route path="/illustrations/:illustrationId" element={<ItemDetailsPage/>}/>
                                        <Route path="*" element={<NotFoundPage/>}/>
                                    </Routes>
                                </div>
                                <Footer/>
                            </BrowserRouter>
                        </CartProvider>
                    </IllustrationsProvider>
                </div>
            </div>
        </>
    )
}

export default App
