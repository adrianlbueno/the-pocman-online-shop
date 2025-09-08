import { useState, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const PasswordInput = forwardRef(
  ({ labelText, id, registration }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div className="mb-5">
        <label
          htmlFor={id}
          className="font-nunito mb-3 block text-base font-medium text-[#07074D]"
        >
          {labelText}
        </label>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsVisible((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
            aria-label={isVisible ? 'Hide password' : 'Show password'}
          >
            <FontAwesomeIcon
              className="h-5 w-5 text-gray-400"
              icon={isVisible ? faEyeSlash : faEye}
            />
          </button>

          <input
            id={id}
            ref={ref}
            type={isVisible ? 'text' : 'password'}
            autoComplete="new-password"
            placeholder="Enter your password"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
    );
  }
);
