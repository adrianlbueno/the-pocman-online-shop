import { Link } from 'react-router-dom';
import { PasswordInput } from '../common/PasswordInput.jsx';
import { isEmail } from '../../helper/isEmail.js';
import { useCallback, useState } from 'react';

const SignUp = () => {
  const intialValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [data, setData] = useState(intialValues);
  const handleDataChange = (event) => {
    const { name, value } = event.target;
    const updateValues = { ...data, [name]: value };
    setData(updateValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <h1 className=" font-nunito font-extrabold text-[32px] text-center mb-2">
          Create your Pocman Account
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Please fill in your details below
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-5">
            <label
              htmlFor="fullname"
              className=" font-nunito mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              onChange={handleDataChange}
              value={data.fullName}
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className=" font-nunito mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              onChange={handleDataChange}
              value={data.email}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <PasswordInput
            labelText="Password"
            id="password"
            value={data.password}
            handleDataChange={handleDataChange}
          />
          <PasswordInput
            labelText="Confirm Password"
            id="confirm-password"
            value={data.confirmPassword}
            handleDataChange={handleDataChange}
          />
          <div className="flex items-center justify-between mb-5">
            <button
              type="submit"
              className=" font-nunito hover:shadow-form rounded-md hover:bg-blue-500 bg-[#C025D3] py-3 px-8 text-base font-extrabold text-white outline-none"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className=" font-nunito mt-8 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link
            to="../login"
            className=" font-nunito font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
