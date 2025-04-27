import LogInPage from "./pages/LoginPage.jsx";

const RequireAuth = ({children}) => {
    const userIsLogged = false;

    if (!userIsLogged) {
        return <LogInPage/>;
    }
    return children;
};

export default RequireAuth;