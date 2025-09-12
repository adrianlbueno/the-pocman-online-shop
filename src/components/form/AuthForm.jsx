import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import SignUpForm from './SignUpForm.jsx';
import { AuthContext } from '../../context/Auth/AuthContext.jsx';
import SignInForm from './SignInForm.jsx';

const AuthForm = ({ isLogin = false }) => {
  const methods = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const navigate = useNavigate();
  const { saveToken } = useContext(AuthContext);
  const { error, setError } = useState(null);

  const onSubmit = async (data) => {
    if (error) return;
    try {
      const URL = `${process.env.VITE_APP_ONRENDER_URI}/api/users/${
        isLogin ? 'login' : 'signup'
      }`;

      console.log('data', data);

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
        console.log('Token', parsed.token);
        saveToken(parsed.token);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {!isLogin ? <SignUpForm /> : <SignInForm />}
        </form>
      </FormProvider>
    </div>
  );
};

export default AuthForm;
