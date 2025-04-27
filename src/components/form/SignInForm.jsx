import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <div className="flex min-h-screen  items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
                <h1 className="text-lg font-bold text-center">Welcome to the Pocman Store</h1>
                <p className="text-center">Please enter your details</p>
                <form noValidate>
                    <div className="mb-5">
                        <label
                            htmlFor="inputEmail"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="inputEmail"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div className="mb-5">
                        <label
                            htmlFor="inputPassword"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="inputPassword"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div className="flex items-center justify-between mb-5">
                        <button
                            type="button"
                            className="hover:shadow-form rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none"
                        >
                            Sign In
                        </button>
                        <a
                            href="#"
                            className="text-sm font-semibold text-blue-500 hover:text-blue-700"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>

                <p className="mt-8 text-center text-sm text-gray-500">
                    Not a member?{" "}
                    <Link to="../signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Create an Account
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignIn;