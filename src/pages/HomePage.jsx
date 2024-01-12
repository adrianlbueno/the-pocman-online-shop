import Footer from '../components/Footer';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Shop from '../components/Shop';
import { APIContextProvider } from '../context/apiContext';
import { GlobalContextProvider } from '../context/globalStateContext';
import { ShopContextProvider } from '../context/shopContext';

const HomePage = () => {
    return (
        <div >
            <GlobalContextProvider>
                <ShopContextProvider>
                    <APIContextProvider>
                        <Navbar />
                        <Header />
                        <Shop />
                        <Footer />
                    </APIContextProvider>
                </ShopContextProvider>
            </GlobalContextProvider>
        </div >
    );
};

export default HomePage;
