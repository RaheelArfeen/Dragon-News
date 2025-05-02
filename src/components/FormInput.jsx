import React from 'react';

const FormInput = ({
  label,
  id,
  icon,
  className = '',
  ...props
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={id}
          className={`
            block w-full px-4 py-3 ${icon ? 'pl-10' : ''} 
            bg-gray-50 border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            placeholder-gray-400
            transition-all duration-200
            ${className}
          `}
          {...props}
        />
      </div>
    </div>
  );
};

export default FormInput;