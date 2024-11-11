 // src/components/ui/Card.jsx
export const Card = ({ children }) => <div className="border rounded shadow-lg p-6">{children}</div>;
export const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;
export const CardContent = ({ children }) => <div>{children}</div>;
export const CardFooter = ({ children }) => <div className="mt-4">{children}</div>;
export const CardTitle = ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>;
export const CardDescription = ({ children }) => <p className="text-gray-600">{children}</p>;
