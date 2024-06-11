const getYear = () => {
    return new Date().getFullYear();
}

const Footer = () => {
    return (
        <>
            <footer >
                <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
                    <span className="text-sm text-gray-600 py-1"> &copy;{getYear()} All Rights Reversed by Adrian Bueno</span>
                </div>
            </footer>
        </>);
}

export default Footer;