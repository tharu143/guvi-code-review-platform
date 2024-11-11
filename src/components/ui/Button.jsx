 // src/components/ui/Button.jsx
export const Button = ({ children, onClick, variant = 'primary', ...props }) => {
    const className = variant === 'outline' ? 'border border-blue-600 text-blue-600' : 'bg-blue-600 text-white';
    return (
      <button onClick={onClick} className={`px-4 py-2 rounded ${className}`} {...props}>
        {children}
      </button>
    );
  };
  