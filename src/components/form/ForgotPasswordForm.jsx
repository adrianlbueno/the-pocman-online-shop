import {useRef, useState} from "react";
import {Link} from "react-router-dom";

const ForgotPasswordForm = () => {
    const form = useRef();
    const checkBtn = useRef();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Testing submit");
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setMessage("If that email exists, a reset link has been sent.");
        }, 1500);
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
                <h1 className="text-[32px] font-bold text-center mb-2">Reset your password</h1>
                <p className="text-center text-gray-600 mb-6">We will send you an email to reset your password.</p>

                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-5">
                        <label
                            htmlFor="reset_email"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="reset_email"
                            name="email"
                            value={email}
                            onChange={onChangeEmail}
                            placeholder="Enter your email"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-center mb-5">
                        <button
                            type="submit"
                            className="hover:shadow-form rounded-md bg-blue-500 py-3 px-8 text-base font-normal text-white outline-none disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>

                    {message && (
                        <div className="text-center text-green-600 text-sm mb-4">
                            {message}
                        </div>
                    )}
                </form>

                <p className="mt-8 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
