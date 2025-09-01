import { Link } from 'react-router-dom';
import { PasswordInput } from '../common/PasswordInput.jsx';

const SignIn = () => {
  return (
    <div className="flex min-h-screen  items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <h1 className=" font-nunito font-extrabold text-[32px] text-center">
          Welcome to the Pocman Store
        </h1>
        <p className=" font-nunito text-center text-gray-600">
          Please enter your details
        </p>
        <form>
          <div className="mb-5">
            <label
              htmlFor="inputEmail"
              className=" font-nunito mb-3 block text-base font-medium text-[#07074D]"
            >
              E-mail address
            </label>
            <input
              type="email"
              id="inputEmail"
              name="email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <PasswordInput labelText="Password" />
          <div className="flex items-center justify-between mb-5">
            <button
              type="button"
              className=" font-nunito  rounded-md hover:bg-blue-500 bg-[#C025D3] py-3 px-8 text-base font-bold text-white outline-none"
            >
              Log in
            </button>
            <Link
              to="../forgotPassword"
              className=" font-nunito text-sm font-normal text-blue-500 underline hover:text-blue-700"
            >
              Forgot Password
            </Link>
          </div>
        </form>

        <p className=" font-nunito mt-8 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link
            to="../signup"
            className=" font-nunito font-semibold text-blue-500 hover:text-indigo-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
