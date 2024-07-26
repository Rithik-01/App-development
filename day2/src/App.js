import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Shield, Users, Banknote } from 'lucide-react';


const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <Shield className="h-8 w-8 text-blue-600 mr-2" />
                  <span className="font-bold text-xl text-blue-800">SafeGuard</span>
                </Link>
              </div>
              <div className="flex items-center">
                {user ? (
                  <span className="text-gray-700">Welcome, {user.email}</span>
                ) : (
                  <>
                    <Link to="/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                    <Link to="/signup" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium ml-3">Sign Up</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">SafeGuard Life Insurance</h2>
                <p className="mt-2">Protecting what matters most.</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-blue-400">Terms</a>
                <a href="#" className="hover:text-blue-400">Privacy</a>
                <a href="#" className="hover:text-blue-400">Contact</a>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 text-sm text-gray-400">
              © 2024 SafeGuard Life Insurance. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
