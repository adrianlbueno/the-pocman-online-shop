import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "The Pocman",
  "/about": "About - The Pocman",
  "/contact": "Contact - The Pocman",
  "/signup": "Sign Up - The Pocman",
  "/login": "Log In - The Pocman",
  "/forgotPassword": "Forgot Password - The Pocman",
  "/admin": "Admin - The Pocman",
};

const Page = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    document.title = titles[location.pathname] || "";
  }, [location.pathname]);
  return children;
};

export default Page;
