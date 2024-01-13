import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddIllustration } from "./components/admin/AddIllustration";
import { EditIllustration } from "./components/admin/EditIllustration";
import AboutPage from "./pages/AboutPage";
import AdminPape from "./pages/AdminPage";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import LogInPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/admin" element={<AdminPape />} />
          <Route path="/add" element={<AddIllustration />} />
          <Route path="/edit/:id" element={<EditIllustration />} />
          <Route path="/illustrations/:illustrationId" element={<ItemDetailsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
