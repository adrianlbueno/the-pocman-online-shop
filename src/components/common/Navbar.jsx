import {faBars, faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import CartSidebar from '../cart/CartSidebar.jsx';
import PocmanLogo from "./PocmanLogo.jsx";
import {menuLinks} from "./MenuLinks.jsx";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openShoppingCart, setOpenShoppingCart] = useState(false);

    const handleShow = useCallback(() => {
        setOpenShoppingCart((prevState) => {
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
                <div className="md:hidden">
                    <button onClick={handleClick}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>

                <div className="cursor-pointer">
                    <Link to="/">
                        <PocmanLogo/>
                    </Link>
                </div>

                <div className="hidden gap-3 md:!flex">
                    {menuLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.path}
                            className="flex cursor-pointer flex-col items-center justify-center"
                        >
                            <a className="font-bold text-lg hover:text-[#C265A7]">{link.label}</a>
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
                        <CartSidebar open={openShoppingCart} toggleCart={handleShow}/>
                </div>
            </nav>

            {openMenu && (
                <div
                    className="md:hidden absolute left-0 right-0 z-50 h-screen w-full bg-white"
                >
                    <div className="mx-auto">
                        <ul className="text-center font-medium">
                            {menuLinks.map((link) => (
                                <li key={link.id} className="py-2 cursor-pointer">
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