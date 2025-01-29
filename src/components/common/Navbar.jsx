import {faBars, faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import Cart from '../cart/Cart';
import PocmanLogo from "./PocmanLogo.jsx";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [showIcon, setShow] = useState(false);

    const menuLinks = [
        {id: "Home", label: 'Home', path: '/'},
        {id: "About", label: 'About Me', path: '/about'},
        {id: "Contact", label: 'Contact', path: '/contact'},
    ];

    const handleShow = useCallback(() => {
        setShow((prevState) => {
            return !prevState;
        });
    }, [])

    const handleClick = useCallback(() => {
        setOpenMenu((prevState) => {
            return !prevState;
        });
    }, []);

    return (
        <>
            <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
                <PocmanLogo/>
                <div className="md:hidden">
                    <button onClick={handleClick}>
                        <FontAwesomeIcon icon={faBars}/>
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

                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <Link to="admin">
                        <FontAwesomeIcon icon={faUser}/>
                    </Link>

                    <button onClick={handleShow}>
                        <FontAwesomeIcon icon={faCartShopping}/>
                    </button>
                    {showIcon ? (
                        <Cart open={showIcon} setOpen={setShow}/>
                    ) : null
                    }
                </div>
            </nav>

            {openMenu && (
                <div
                    className="md:hidden absolute left-0 right-0 z-50 h-screen w-full bg-white"
                >
                    <div className="mx-auto">
                        <ul className="text-center font-medium">
                            {menuLinks.map((link) => (
                                <li key={link.id} className="py-2">
                                    <Link to={link.path} onClick={handleClick}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;