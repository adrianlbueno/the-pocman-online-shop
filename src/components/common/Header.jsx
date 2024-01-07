
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const menuLinks = [
        { id: "Home", label: 'Home', path: '/' },
        { id: "About", label: 'About Us', path: '/about' },
        { id: "Contact", label: 'Contact', path: '/contact' },
    ];

    const handleClick = useCallback(() => {
        setOpenMenu((prevState) => {
            return !prevState;
        });
    }, []);

    return (
        <>
            <header className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
                <Link to="/" className="w-24">
                    <h1 className="cursor-pointer sm:h-auto sm:w-auto">The Pocman</h1>
                </Link>
                <div className="md:hidden">
                    <button onClick={handleClick}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <div className="hidden gap-3 md:!flex">
                    {menuLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.path}
                            className="flex cursor-pointer flex-col items-center justify-center"
                        >
                            <p className="text-xs">{link.label}</p>
                        </Link>
                    ))}
                </div>
                <div >
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </header>

            {openMenu && (
                <div
                    className="md:hidden absolute left-0 right-0 z-50 h-screen w-full bg-white"
                >
                    <div className="mx-auto">
                        <ul className="text-center font-medium">
                            {menuLinks.map((link) => (
                                <li key={link.id} className="py-2">
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;