import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Shield, Users, Banknote } from 'lucide-react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign-up data:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 py-12">
      <Card className="w-[450px] shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-blue-800">Sign Up</CardTitle>
          <CardDescription className="text-center text-gray-600">
            Create your account to get started with SafeGuard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "Full Name", id: "name", type: "text" },
              { label: "Email", id: "email", type: "email" },
              { label: "Password", id: "password", type: "password" },
              { label: "Confirm Password", id: "confirmPassword", type: "password" },
            ].map((field) => (
              <div key={field.id} className="space-y-2">
                <label htmlFor={field.id} className="text-sm font-medium text-gray-700">{field.label}</label>
                <Input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            ))}
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Sign Up</Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-gray-600">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};