import { Link } from 'react-router-dom';
import { PasswordInput } from '../common/PasswordInput.jsx';
import { useFormContext } from 'react-hook-form';

const SignUp = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex min-h-screen items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <h1 className=" font-nunito font-extrabold text-[32px] text-center mb-2">
          Create your Pocman Account
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Please fill in your details below
        </p>
        <div className="mb-5">
          <label
            htmlFor="fullname"
            className=" font-nunito mb-3 block text-base font-medium text-[#07074D]"
          >
            Full Name
          </label>
          <input
            {...register('fullName', {
              required: {
                value: true,
                message: 'Please enter your full name',
              },
            })}
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          {errors.fullName && (
            <span className="text-sm text-red-500">
              {errors.fullName.message}
            </span>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className=" font-nunito mb-3 block text-base font-medium text-[#07074D]"
          >
            Email Address
          </label>
          <input
            {...register('email', {
              required: {
                value: true,
                message: 'Please enter a valid email address',
              },
            })}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            autoComplete={'email'}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>
        <PasswordInput labelText="Password" id="password" name="password" />
        <PasswordInput
          labelText="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
        />

        <div className="flex items-center justify-between mb-5">
          <button
            type="submit"
            className=" font-nunito hover:shadow-form rounded-md hover:bg-blue-500 bg-[#C025D3] py-3 px-8 text-base font-extrabold text-white outline-none"
          >
            Sign up
          </button>
        </div>
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
