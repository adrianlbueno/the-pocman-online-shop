import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddIllustration from './components/admin/AddIllustration.jsx';
import { EditIllustration } from './components/admin/EditIllustration';
import Footer from './components/common/Footer.jsx';
import Navbar from './components/common/Navbar.jsx';
import Page from './components/navigation/Page.jsx';
import { CartProvider } from './context/cart/CartProvider.jsx';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import WorkInProgress from './components/common/WorkInProgress.jsx';
import { useFetchIllustrations } from './hooks/useFetchIllustrations.js';
import WelcomePage from './components/common/WelcomePage.jsx';

const App = () => {
  const [illustrations, isLoading] = useFetchIllustrations();
  if (isLoading) {
    return <WelcomePage isLoading={isLoading} />;
  }

  return (
    <>
      <div>
        <div className="flex flex-col h-screen justify-between">
          <CartProvider>
            <BrowserRouter>
              <div>
                <Navbar />
                <Routes>
                  <Route
                    ww
                    path="/"
                    element={
                      <Page>
                        <HomePage />
                      </Page>
                    }
                  />
                  <Route
                    path="/about"
                    element={
                      <Page>
                        <AboutPage />
                      </Page>
                    }
                  />
                  <Route
                    path="/contact"
                    element={
                      <Page>
                        <Contact />
                      </Page>
                    }
                  />
                  <Route
                    path="/add"
                    element={
                      <Page>
                        <AddIllustration />
                      </Page>
                    }
                  />
                  <Route
                    path="/edit/:editId"
                    element={
                      <Page>
                        <EditIllustration />
                      </Page>
                    }
                  />
                  <Route
                    path="/illustrations/:illustrationId"
                    element={
                      <Page>
                        <WorkInProgress />
                      </Page>
                    }
                  />
                  <Route
                    path="*"
                    element={
                      <Page>
                        <NotFoundPage />
                      </Page>
                    }
                  />
                </Routes>
              </div>
              <Footer />
            </BrowserRouter>
          </CartProvider>
        </div>
      </div>
    </>
  );
};

export default App;
