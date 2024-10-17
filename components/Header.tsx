"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, MenuIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 bg-background border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-primary"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
          <span className="text-2xl font-bold">Luunos AI</span>
        </Link>
        <nav className="hidden md:flex space-x-4 items-center">
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Button variant="ghost" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
          <Button variant="outline">Log In</Button>
          <Button>Sign Up</Button>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/dashboard" className="block py-2 hover:underline">
            Dashboard
          </Link>
          <Button variant="ghost" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="w-full justify-start">
            {theme === 'dark' ? <SunIcon className="h-5 w-5 mr-2" /> : <MoonIcon className="h-5 w-5 mr-2" />}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </Button>
          <Button variant="outline" className="w-full">Log In</Button>
          <Button className="w-full">Sign Up</Button>
        </div>
      )}
    </header>
  );
}