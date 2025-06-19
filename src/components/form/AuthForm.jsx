import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import SignUpForm from "./SignUpForm.jsx";
import { AuthContext } from "../../context/Auth/AuthContext.jsx";
import SignInForm from "./SignInForm.jsx";

const AuthForm = ({ isLogin }) => {
  const {
    register,
    handelSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { saveToken } = useContext(AuthContext);
  const { error, setError, isLoading, setIsLoading } = useState(null);

  const onSubmit = async (data) => {
    if (error) return;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/${isLogin ? "login" : "signup"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.status === 201) {
        navigate("/login");
      }

      if (response.status === 200) {
        const parsed = await response.json();
        console.log(parsed);
        saveToken(parsed.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <div>{isLogin ? <SignUpForm /> : <SignInForm />}</div>;
};

export default AuthForm;
