import { Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
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
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="signUp" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>


    </>
  )
}

export default App
