 
// src/components/ui/Select.jsx
export const Select = ({ children }) => <select className="border px-3 py-2 rounded w-full">{children}</select>;
export const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;
