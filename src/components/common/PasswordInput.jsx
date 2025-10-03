import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

export const PasswordInput = ({ name, labelText, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    getValues,
    watch,
    formState: { errors },
  } = useFormContext();

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
          {...register(name, {
            required: true,
            validate: (value) =>
              value === watch('password') || 'Your passwords do not match',
          })}
          type={isVisible ? 'text' : 'password'}
          autoComplete="new-password"
          placeholder="Enter your password"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p className="text-sm text-[#bf1650]">{message}</p>
          )}
        />
      </div>
    </div>
  );
};
