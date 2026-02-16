"use client";

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

const Index = () => {
  const stats = [
    { label: "Faster Shortlists", value: "30%", icon: Zap },
    { label: "Placement Success", value: "98%", icon: CheckCircle2 },
    { label: "CXO Placements", value: "500+", icon: Users },
    { label: "AI Accuracy", value: "95%", icon: ShieldCheck },
  ];

  const industries = [
    { name: "Healthcare", image: "https://images.unsplash.com/photo-1538108197017-c1b89c0ef319?auto=format&fit=crop&q=80&w=800" },
    { name: "Startups", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800" },
    { name: "FMCG", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-50 rounded-l-[100px] hidden lg:block" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00BFFF]/10 text-[#00BFFF] text-sm font-bold"
              >
                <TrendingUp className="w-4 h-4" />
                <span>The Future of Executive Search</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold text-[#001F3F] leading-[1.1]"
              >
                AI-Powered Executive Search: <span className="text-[#00BFFF]">Faster, Fairer, Human-Led.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-600 max-w-xl leading-relaxed"
              >
                AI removes screening noise so our partners focus on judgment. We find the leaders who don't just fit your culture—they evolve it.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="bg-[#001F3F] hover:bg-[#003366] text-white rounded-full px-8 py-7 text-lg">
                  <Link to="/services">Explore Our Approach <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-[#001F3F] text-[#001F3F] hover:bg-slate-50 rounded-full px-8 py-7 text-lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
                  alt="Executive Leadership" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-[#00BFFF] p-3 rounded-xl">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Shortlist Speed</p>
                    <p className="text-2xl font-bold text-[#001F3F]">3x Faster</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#001F3F]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-[#00BFFF]" />
                </div>
                <p className="text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-slate-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-[#001F3F]">Specialized Expertise</h2>
            <p className="text-lg text-slate-600">We partner with high-growth organizations across key sectors to find transformative leadership talent.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                  <p className="text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">Tailored search strategies for {industry.name.toLowerCase()} leaders.</p>
                  <div className="flex items-center text-[#00BFFF] font-bold">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Cpu className="w-64 h-64 text-[#001F3F]" />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => <CheckCircle2 key={i} className="w-5 h-5 text-[#00BFFF] fill-[#00BFFF]" />)}
                </div>
                <h3 className="text-3xl font-bold text-[#001F3F] italic leading-tight">
                  "ASTC's AI-driven approach cut our hiring time by half. The quality of candidates was exceptional, but it was their human insight that helped us choose the right leader for our culture."
                </h3>
                <div>
                  <p className="font-bold text-xl text-[#001F3F]">Sarah Chen</p>
                  <p className="text-slate-500">Founder & CEO, HealthTech Global</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-[#00BFFF] rounded-full blur-3xl opacity-20 animate-pulse" />
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" 
                    alt="Sarah Chen" 
                    className="relative z-10 w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#001F3F] rounded-[40px] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-64 h-64 border border-white rounded-full" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto">Ready to find your next transformative leader?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Join the ranks of forward-thinking companies using AI to build better leadership teams.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-[#00BFFF] hover:bg-[#0099CC] text-white rounded-full px-10 py-7 text-lg">
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;