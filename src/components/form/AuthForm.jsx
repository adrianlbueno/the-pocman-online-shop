import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import SignUpForm from './SignUpForm.jsx';
import { AuthContext } from '../../context/Auth/AuthContext.jsx';
import SignInForm from './SignInForm.jsx';

const AuthForm = ({ isLogin }) => {
  const defaultValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const navigate = useNavigate();
  const { saveToken } = useContext(AuthContext);
  const { error, setError } = useState(null);

  const onSubmit = async (data) => {
    if (error) return;
    try {
      console.log('env file value', process.env.VITE_APP_MONGODB_URI);
      const URL = `${process.env.VITE_APP_MONGODB_URI}/auth/${
        isLogin ? 'login' : 'signup'
      }`;

      console.log('url..', URL);

      const response = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        navigate('/login');
      }

      if (response.status === 200) {
        const parsed = await response.json();
        console.log('parsed', parsed);
        saveToken(parsed.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!isLogin ? (
        <SignUpForm
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      ) : (
        <SignInForm />
      )}
    </div>
  );
};

export default AuthForm;
