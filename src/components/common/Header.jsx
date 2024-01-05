
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
                {/* <form className="hidden border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none md:flex">

                    <input
                        className="hidden w-11/12 outline-none md:block"
                        type="search"
                        placeholder="Search"
                    />
                    <button className="ml-auto h-full px-4">
                        <FontAwesomeIcon className='text-gray-600 h-4 w-4 fill-current' icon={faMagnifyingGlass} />
                    </button>
                </form> */}

                <div className="hidden gap-3 md:!flex">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.path}
                            className="flex cursor-pointer flex-col items-center justify-center"
                        >
                            {link.icon}
                            <p className="text-xs">{link.label}</p>
                        </a>
                    ))}
                </div>
            </header>
            {mobileMenuOpen && (
                <section
                    className={`block md:hidden absolute left-0 right-0 z-50 h-screen w-full bg-white ${mobileMenuOpen ? "none" : "block"
                        }`}
                >
                    <div className="mx-auto">
                        <div className="mx-auto flex w-full justify-center gap-3 py-4">
                            {/* {iconLinks.map ((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="flex cursor-pointer flex-col items-center justify-center"
                                >
                                    {link.icon}
                                    <p className="text-xs">{link.text}</p>
                                </a>
                            ))} */}
                        </div>
                        <form className="my-4 mx-5 flex h-9 items-center border">
                            {/* <CiSearch className="mx-3 h-4 w-4" /> */}

                            <input
                                className="hidden w-11/12 outline-none md:block"
                                type="search"
                                placeholder="Search"
                            />
                            <button
                                type="submit"
                                className="ml-auto h-full bg-amber-400 px-4 hover:bg-yellow-300"
                            >
                                Search
                            </button>
                        </form>
                        <ul className="text-center font-medium">
                            {links.map((link, index) => (
                                <li key={index} className="py-2">
                                    <a href={link.url}>{link.text}</a>
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