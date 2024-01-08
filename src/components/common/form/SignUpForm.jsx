import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="bg-gray-lighter min-h-screen flex flex-col">
                    <form className="w-full max-w-sm">
                        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                                <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                                <input
                                    type="text"
                                    className="block border border-gray-light w-full p-3 rounded mb-4"
                                    name="fullname"
                                    placeholder="Full Name" />

                                <input
                                    type="text"
                                    className="block border border-gray-light w-full p-3 rounded mb-4"
                                    name="email"
                                    placeholder="Email" />

                                <input
                                    type="password"
                                    className="block border border-gray-light w-full p-3 rounded mb-4"
                                    name="password"
                                    placeholder="Password" />
                                <input
                                    type="password"
                                    className="block border border-gray-light w-full p-3 rounded mb-4"
                                    name="confirm_password"
                                    placeholder="Confirm Password" />

                                <button
                                    type="submit"
                                    className="w-full text-center py-3 rounded bg-blue-500 text-white font-bold  hover:bg-green-dark focus:shadow-outline my-1"
                                >Create Account</button>

                                <div className="text-center text-sm text-gray-dark mt-4">
                                    By signing up, you agree to the
                                    <span className="no-underline border-b border-gray-100 text-gray-600" href="#">
                                        Terms of Service
                                    </span> and
                                    <span className="no-underline border-b border-gray-100 text-gray-600 " href="#">
                                        Privacy Policy
                                    </span>
                                </div>
                            </div>

                            <div className="text-gray-dark mt-6">
                                Already have an account?
                                <Link className="no-underline border-b border-blue text-blue" to="../login">
                                    Log in
                                </Link>.
                            </div>
                        </div>
                    </form >
                </div>
            </div>
        </>
    );
}

export default SignUp;