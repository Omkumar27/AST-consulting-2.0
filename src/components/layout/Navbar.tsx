"use client";

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Insights', path: '/insights' },
    { name: 'Placements', path: '/placements' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      scrolled ? "bg-white/90 backdrop-blur-md py-3 border-slate-200 shadow-sm" : "bg-transparent py-5 border-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-[#001F3F] p-1.5 rounded-lg group-hover:bg-[#00BFFF] transition-colors">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <span className={cn(
            "text-2xl font-bold tracking-tighter transition-colors",
            scrolled ? "text-[#001F3F]" : "text-[#001F3F]"
          )}>
            ASTC
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#00BFFF]",
                location.pathname === link.path ? "text-[#00BFFF]" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-[#001F3F] hover:bg-[#003366] text-white rounded-full px-6">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#001F3F]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium p-2 rounded-md",
                location.pathname === link.path ? "bg-slate-50 text-[#00BFFF]" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-[#001F3F] w-full py-6 text-lg" onClick={() => setIsOpen(false)}>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;