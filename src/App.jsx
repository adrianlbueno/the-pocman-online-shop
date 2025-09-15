import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { EditIllustration } from './components/admin/EditIllustration';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import LogInPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import SignUpPage from './pages/SignUpPage';
import Footer from './components/common/Footer.jsx';
import Navbar from './components/common/Navbar.jsx';
import AddIllustration from './components/admin/AddIllustration.jsx';
import { CartProvider } from './context/cart/CartProvider.jsx';
import AdminPage from './pages/AdminPage.jsx';
import ForgotPasswordForm from './components/form/ForgotPasswordForm.jsx';
import ComingSoon from './components/common/ComingSoon.jsx';
import Page from './components/navigation/Page.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';

const comingSoon = true;
const App = () => {
  if (comingSoon) {
    return <ComingSoon />;
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
                    path="/login"
                    element={
                      <Page>
                        <LogInPage />
                      </Page>
                    }
                  />
                  <Route
                    path="/signUp"
                    element={
                      <Page>
                        <SignUpPage />
                      </Page>
                    }
                  />
                  <Route
                    path="/forgotPassword"
                    element={
                      <Page>
                        <ForgotPasswordForm />
                      </Page>
                    }
                  />
                  <Route
                    path="/admin"
                    element={
                      <Page>
                        <ProtectedRoute>
                          <AdminPage />
                        </ProtectedRoute>
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
                        <ItemDetailsPage />
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
