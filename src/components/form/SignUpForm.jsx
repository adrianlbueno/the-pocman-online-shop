import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <h1 className=" font-nunito font-extrabold text-[32px] text-center mb-2">
          Create your Pocman Account
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Please fill in your details below
        </p>
        <form noValidate>
          <div className="mb-5">
            <label
              htmlFor="fullname"
              className=" font-nunito mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
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
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className=" font-nunito mb-3 block text-base font-medium text-[#07074D]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="confirm_password"
              className=" font-nunito mb-3 block text-base font-medium text-[#07074D]"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm your password"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="flex items-center justify-between mb-5">
            <button
              type="submit"
              className=" font-nunito hover:shadow-form rounded-md hover:bg-blue-500 bg-[#C025D3] py-3 px-8 text-base font-normal text-white outline-none"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className=" font-nunito mt-8 text-center text-sm text-gray-500">
          Already have an account?{" "}
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
