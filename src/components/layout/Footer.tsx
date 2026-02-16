"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001F3F] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Cpu className="w-8 h-8 text-[#00BFFF]" />
              <span className="text-2xl font-bold tracking-tighter">ASTC</span>
            </Link>
            <p className="text-slate-300 leading-relaxed">
              AI-Powered Executive Search. Faster, Fairer, Human-Led. We bridge the gap between cutting-edge technology and executive judgment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#00BFFF] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#00BFFF] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-300">
              <li><Link to="/services" className="hover:text-[#00BFFF] transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-[#00BFFF] transition-colors">About Us</Link></li>
              <li><Link to="/insights" className="hover:text-[#00BFFF] transition-colors">Insights & Trends</Link></li>
              <li><Link to="/placements" className="hover:text-[#00BFFF] transition-colors">Success Stories</Link></li>
              <li><Link to="/careers" className="hover:text-[#00BFFF] transition-colors">Join Our Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Industries</h4>
            <ul className="space-y-4 text-slate-300">
              <li><span className="hover:text-[#00BFFF] transition-colors cursor-default">Healthcare & Life Sciences</span></li>
              <li><span className="hover:text-[#00BFFF] transition-colors cursor-default">Tech Startups & Scaleups</span></li>
              <li><span className="hover:text-[#00BFFF] transition-colors cursor-default">FMCG & Retail</span></li>
              <li><span className="hover:text-[#00BFFF] transition-colors cursor-default">Financial Services</span></li>
              <li><span className="hover:text-[#00BFFF] transition-colors cursor-default">Manufacturing</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00BFFF] shrink-0" />
                <span>Executive Center, BKC, Mumbai, Maharashtra 400051</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00BFFF] shrink-0" />
                <span>+91 22 4567 8900</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00BFFF] shrink-0" />
                <span>contact@astc-search.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} ASTC Executive Search. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;