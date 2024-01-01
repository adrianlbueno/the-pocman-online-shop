const getYear = () => {
    return new Date().getFullYear();
}

const Footer = () => {
    return (
        <>
            <footer>
                <div className="p-4 text-center bg-black bg-opacity-20">
                    <span> &copy; {getYear()} Adrian Bueno</span>
                </div>
            </footer>
        </>);
}

export default Footer;