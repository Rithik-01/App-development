import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Shield, Users, Banknote } from 'lucide-react';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ email });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <Card className="w-[400px] shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-blue-800">Login</CardTitle>
          <CardDescription className="text-center text-gray-600">
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Login</Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-gray-600">
            Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
