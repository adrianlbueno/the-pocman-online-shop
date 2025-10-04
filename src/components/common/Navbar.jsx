import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import PocmanLogo from './PocmanLogo.jsx';
import { menuLinks } from './MenuLinks.jsx';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  console.log('openMenu', openMenu);
  const handleActiveItem = (item) => {
    setActiveItem(item);
  };

  const handleClick = useCallback(() => {
    setOpenMenu((prevState) => {
      return !prevState;
    });
  }, []);

  return (
    <>
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
        <div className="cursor-pointer">
          <Link to="/">
            <PocmanLogo />
          </Link>
        </div>
        <div className="hidden gap-3 md:!flex">
          {menuLinks.map((link) => (
            <ul>
              <Link
                key={link.id}
                to={link.path}
                viewTransition
                className="flex cursor-pointer flex-col items-center justify-center font-nunito font-black text-lg "
              >
                <li
                  onClick={() => handleActiveItem(link.label)}
                  className={` ${
                    activeItem === link.label &&
                    'text-[#C025D3] border-b-[5px] border-fuchsia-600'
                  }  hover:text-[#C025D3] `}
                >
                  {link.label}
                </li>
              </Link>
            </ul>
          ))}
        </div>

        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div className=" md:hidden text-[32px]" onClick={handleClick}>
            {openMenu ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
      </nav>

      {openMenu && (
        <div>
          <div
            className={`md:hidden absolute left-0 top-16 z-50  bg-gray-200 w-full overflow-hidden  transition-all duration-300${
              openMenu ? 'translate-y-0  h-screen opacity-100' : 'h-0'
            }`}
          >
            <div className="flex flex-col items-start mx-5 mt-4 space-y-4">
              <ul>
                {menuLinks.map((link) => (
                  <li
                    key={link.id}
                    className="cursor-pointer font-nunito text-[52px] font-extrabold"
                  >
                    <Link to={link.path} onClick={handleClick}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
