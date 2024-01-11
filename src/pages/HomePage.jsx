import Footer from '../components/Footer';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Shop from '../components/Shop';
import { APIContextProvider } from '../context/apiContext';

const HomePage = () => {
    return (
        <div >
            <APIContextProvider>
                <Navbar />
                <Header />
                <Shop />
                <Footer />
            </APIContextProvider>
        </div >
    );
};

export default HomePage;
