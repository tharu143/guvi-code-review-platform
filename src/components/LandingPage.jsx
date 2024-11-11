import { useState } from 'react';
import { Button } from './ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Select, SelectItem } from './ui/Select';

export default function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registration submitted");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden flex">
          <div className="w-1/2 bg-blue-600">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Code Review Platform"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Code Review Platform</h1>
            {!showLogin && !showRegister && (
              <div className="space-y-4">
                <Button onClick={() => setShowLogin(true)} className="w-full">Login</Button>
                <Button onClick={() => setShowRegister(true)} variant="outline" className="w-full">Register</Button>
              </div>
            )}
            {showLogin && (
              <Card>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required className="w-full"/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Enter your password" required className="w-full"/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="userType">User Type</Label>
                      <Select className="w-full">
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full">Login</Button>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button variant="link" onClick={() => setShowLogin(false)}>Back to options</Button>
                </CardFooter>
              </Card>
            )}
            {showRegister && (
              <Card>
                <CardHeader>
                  <CardTitle>Register</CardTitle>
                  <CardDescription>Create a new account</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" required className="w-full"/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" required className="w-full"/>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required className="w-full"/>
                    </div>
                    <Button type="submit" className="w-full">Register</Button>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button variant="link" onClick={() => setShowRegister(false)}>Back to options</Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
