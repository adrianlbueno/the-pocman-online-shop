
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const links = [
        { id: 1, label: 'Home', path: '/' },
        { id: 2, label: 'About Us', path: '/about' },
        { id: 3, label: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <header className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
                <Link to="/" className="w-24">
                    <h1 className="cursor-pointer sm:h-auto sm:w-auto">The Pocman</h1>
                </Link>
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

                <div className="hidden gap-3 md:!flex">
                    {links.map((link) => (
                        <Link
                            key={link.id}
                            to={link.path}
                            className="flex cursor-pointer flex-col items-center justify-center"
                        >
                            <p className="text-xs">{link.label}</p>
                        </Link>
                    ))}
                </div>
            </header>
            {mobileMenuOpen && (
                <section
                    className={`block md:hidden absolute left-0 right-0 z-50 h-screen w-full bg-white ${mobileMenuOpen ? "none" : "block"
                        }`}
                >
                    <div className="mx-auto">
                        <ul className="text-center font-medium">
                            {links.map((link) => (
                                <li key={link.id} className="py-2">
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}
        </>
    );
}

export default Header;