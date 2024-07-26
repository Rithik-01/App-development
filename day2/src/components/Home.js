import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Shield, Users, Banknote } from 'lucide-react';

const Home = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold mb-4 text-blue-800">SafeGuard Life Insurance</h1>
      <p className="text-xl text-gray-600">Protecting your future and your loved ones.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "Term Life Insurance", description: "Affordable coverage for a specific period.", icon: Shield },
        { title: "Whole Life Insurance", description: "Lifelong coverage with cash value growth.", icon: Users },
        { title: "Universal Life Insurance", description: "Flexible premiums and adjustable benefits.", icon: Banknote },
      ].map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-xl font-semibold text-blue-800">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{item.description}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Learn More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
);
