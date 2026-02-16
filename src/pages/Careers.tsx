"use client";

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Users, Globe } from 'lucide-react';

const Careers = () => {
  const perks = [
    { title: "AI-First Culture", icon: Zap, desc: "Work with the latest AI tools and shape the future of search." },
    { title: "Global Impact", icon: Globe, desc: "Partner with world-changing companies across continents." },
    { title: "Expert Mentorship", icon: Users, desc: "Learn from industry veterans with decades of experience." },
    { title: "Innovation Lab", icon: Sparkles, desc: "Dedicated time to experiment with new search methodologies." },
  ];

  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-[#001F3F]">Join the AI Revolution in Search</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                We're looking for curious minds, tech enthusiasts, and relationship builders who want to redefine how the world's best leaders are found.
              </p>
              <Button className="bg-[#001F3F] hover:bg-[#003366] text-white rounded-full px-10 py-7 text-lg">
                View Open Roles <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" alt="Team" className="rounded-3xl shadow-2xl" />
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#001F3F] text-center mb-12">Why ASTC?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {perks.map((perk, idx) => (
                <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <perk.icon className="w-7 h-7 text-[#00BFFF]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#001F3F]">{perk.title}</h3>
                  <p className="text-slate-600">{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#001F3F] rounded-[40px] p-12 md:p-20 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Don't see a perfect fit?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">We're always looking for exceptional talent. Send us your profile and tell us how you can help us grow.</p>
            <Button className="bg-[#00BFFF] hover:bg-[#0099CC] text-white rounded-full px-10 py-7 text-lg">
              Send Open Application
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;