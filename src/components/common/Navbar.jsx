import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import PocmanLogo from './PocmanLogo.jsx';
import { menuLinks } from './MenuLinks.jsx';
import style from './Navbar.module.css';

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

  const style1 = ' h-screen-40';
  const style2 = 'max-h-0';

  const testing = `absolute right-0 top-16 z-50 w-full bg-fuchsia-50 md:hidden  ${
    openMenu ? style1 : style2
  }`;

  console.log('Testing', testing);
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
          <button
            className=" md:hidden text-[32px]"
            onClick={() => handleClick()}
          >
            {openMenu ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </nav>

      {openMenu && (
        <div className={testing}>
          <div
            id={style['menu']}
            className="flex flex-col items-start mx-5 mt-4 space-y-4"
          >
            <ul id="list">
              {menuLinks.map((link) => (
                <li
                  key={link.id}
                  className="cursor-pointer font-nunito text-[52px] font-extrabold leading-none hovertext-gray-300 "
                >
                  <Link to={link.path} onClick={handleClick}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
