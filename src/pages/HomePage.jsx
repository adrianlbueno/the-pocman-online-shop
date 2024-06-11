import Footer from '../components/common/Footer';
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Shop from '../components/shop/Shop';
import { APIContextProvider } from '../context/apiContext';
import { ShopContextProvider } from '../context/shopContext';

const HomePage = () => {
    return (
        <ShopContextProvider>
            <APIContextProvider>
                <Header />
                <Shop />
            </APIContextProvider>
        </ShopContextProvider>
    );
};

export default HomePage;
