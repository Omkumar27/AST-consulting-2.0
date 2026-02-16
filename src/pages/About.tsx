"use client";

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { Shield, Heart, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const values = [
    { title: "Integrity", icon: Shield, desc: "Unwavering commitment to ethical search and candidate confidentiality." },
    { title: "Innovation", icon: Lightbulb, desc: "Pioneering AI tools to redefine the boundaries of executive search." },
    { title: "Empathy", icon: Heart, desc: "Understanding the human stories behind every resume and role." },
    { title: "Collaboration", icon: Users, desc: "Working as a true extension of your leadership team." },
  ];

  const team = [
    { name: "Vikram Malhotra", role: "Managing Partner", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Ananya Sharma", role: "Head of AI Strategy", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
    { name: "David Miller", role: "Director, Healthcare Search", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
    { name: "Priya Iyer", role: "Director, Startup Scaleups", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-[#001F3F]">Building the Future of Leadership</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                ASTC was founded on a simple premise: the traditional executive search model is broken. It's too slow, too biased, and too reliant on "who you know."
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We've rebuilt the process from the ground up, using AI to expand the talent pool and human judgment to select the perfect fit. Based in Mumbai with a global reach, we serve the world's most innovative companies.
              </p>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Office" className="rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-10 -right-10 bg-[#00BFFF] p-12 rounded-3xl hidden lg:block">
                <p className="text-5xl font-bold text-white">15+</p>
                <p className="text-white font-medium">Years of Excellence</p>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#001F3F] text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <value.icon className="w-8 h-8 text-[#00BFFF]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#001F3F]">{value.title}</h3>
                  <p className="text-slate-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#001F3F] text-center mb-12">Meet Our Partners</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="group">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-[#001F3F]">{member.name}</h3>
                  <p className="text-slate-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;