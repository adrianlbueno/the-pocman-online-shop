import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/common/Footer';
import Header from "./components/common/Header";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";



import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="signUp" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Header />
      <Footer />
    </>
  )
}

export default App
