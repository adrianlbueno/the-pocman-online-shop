const SignIn = () => {
    return (
        <div>
            <form noValidate>
                <label htmlFor="inputEmail">E-mail</label>
                <input
                    type="email"
                    id="inputEmail"
                    name="email"
                />
                <label htmlFor="inputPassword">Password</label>
                <input
                    type="password"
                    id="inputPassword"
                    name="password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default SignIn;