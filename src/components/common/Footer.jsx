import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBehance,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const getYear = () => {
  return new Date().getFullYear();
};
const instagramLink = (
  <Link to="https://www.instagram.com/thepocman/" target="_blank">
    <FontAwesomeIcon className="w-[25px]" icon={faInstagram} />
  </Link>
);

const linkedinLink = (
  <Link
    to="https://www.linkedin.com/in/adrian-bueno-08189b108/"
    target="_blank"
  >
    <FontAwesomeIcon className="w-[25px]" icon={faLinkedin} />
  </Link>
);

const behanceLink = (
  <Link to="https://www.behance.net/thepocman" target="_blank">
    <FontAwesomeIcon className="w-[25px]" icon={faBehance} />
  </Link>
);

const githubLink = (
  <Link to="https://github.com/adrianlbueno" target="_blank">
    <FontAwesomeIcon className="w-[25px]" icon={faGithub} />
  </Link>
);

const heartIcon = <FontAwesomeIcon className="text-red-600" icon={faHeart} />;

const Footer = () => {
  return (
    <>
      <div>
        <footer className="w-full px-4 py-6 mt-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify    -center">
            <div>
              <span className=" font-nunito text-sm text-gray-600 py-1">
                &copy; {getYear()} Studio Pocman
              </span>
            </div>
            <span className="font-nunito text-xs text-gray-600 py-1">
              Made with {heartIcon} in Münster
            </span>
            <div className="flex gap-3 justify-center py-1">
              <span>{instagramLink}</span>
              <span>{linkedinLink}</span>
              <span>{githubLink}</span>
              <span>{behanceLink}</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
