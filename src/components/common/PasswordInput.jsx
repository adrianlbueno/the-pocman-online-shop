import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const PasswordInput = ({
  labelText,
  id,
  formValue,
  handleDataChange,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible((prevState) => !prevState);
  };

  const eyeIcon = (
    <FontAwesomeIcon
      className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
      icon={faEye}
    />
  );
  const closeEyeIcon = (
    <FontAwesomeIcon
      className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
      icon={faEyeSlash}
    />
  );

  return (
    <div className="mb-5">
      <label
        htmlFor="password"
        className=" font-nunito mb-3 block text-base font-medium text-[#07074D]"
      >
        {labelText}
      </label>
      <div className="relative">
        <span onClick={handleToggle}>
          {!isVisible ? eyeIcon : closeEyeIcon}
        </span>
        <input
          onChange={handleDataChange}
          type={!isVisible ? 'password' : 'text'}
          id={id}
          value={formValue}
          autoComplete="on"
          name="password"
          placeholder="Enter your password"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
    </div>
  );
};
