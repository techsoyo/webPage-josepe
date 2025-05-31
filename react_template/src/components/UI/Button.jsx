import { useContext } from 'react';
import { IdentityContext } from '../../contexts/IdentityContext';
import { ColorSchemeContext } from '../../contexts/ColorSchemeContext';
import { IDENTITIES } from '../../utils/constants';

// Button component with variants for both corporate and artistic identities
const Button = ({ 
  children, 
  variant = 'corporate', 
  size = 'md', 
  className = '',
  href,
  type = 'button',
  onClick,
  disabled = false
}) => {
  const { activeIdentity } = useContext(IdentityContext);
  const { colors } = useContext(ColorSchemeContext);
  
  // Define size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  // Define variant classes and styles
  let variantStyles = {};
  let variantClasses = '';
  
  if (variant === 'corporate') {
    variantStyles = {
      backgroundColor: disabled ? '#CBD5E0' : colors.primary,
      color: '#ffffff',
      border: `1px solid ${disabled ? '#CBD5E0' : colors.primary}`,
    };
    variantClasses = `hover:shadow-lg ${disabled ? 'cursor-not-allowed' : 'hover:brightness-110'}`;
  } 
  else if (variant === 'artistic') {
    variantStyles = {
      backgroundColor: 'transparent',
      color: disabled ? '#A0AEC0' : colors.accent,
      border: `1px solid ${disabled ? '#A0AEC0' : colors.accent}`,
      boxShadow: `0 0 10px ${colors.accent}25`
    };
    variantClasses = `${disabled ? 'cursor-not-allowed' : 'hover:bg-opacity-10 hover:bg-cyan-400'}`;
  }
  else if (variant === 'outline') {
    variantStyles = {
      backgroundColor: 'transparent',
      color: disabled ? '#A0AEC0' : colors.primary,
      border: `1px solid ${disabled ? '#A0AEC0' : colors.primary}`
    };
    variantClasses = `${disabled ? 'cursor-not-allowed' : 'hover:bg-opacity-5 hover:bg-gray-700'}`;
  }
  
  // Common classes
  const commonClasses = `rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-opacity-50 ${sizeClasses[size]} ${variantClasses} ${className}`;
  
  // If href is provided, render as link
  if (href) {
    return (
      <a
        href={href}
        className={commonClasses}
        style={variantStyles}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button
      type={type}
      className={commonClasses}
      style={variantStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;