 // src/components/ui/Input.jsx
export const Input = ({ id, placeholder, type = 'text', ...props }) => (
    <input id={id} placeholder={placeholder} type={type} className="border px-3 py-2 rounded w-full" {...props} />
  );
  