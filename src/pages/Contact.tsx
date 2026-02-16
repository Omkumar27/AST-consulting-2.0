"use client";

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Thank you! Our team will contact you within 24 hours.");
  };

  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h1 className="text-5xl font-bold text-[#001F3F] mb-6">Let's Start a Conversation</h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Whether you're looking for your next CXO or exploring how AI can transform your hiring process, we're here to help.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#00BFFF]/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#001F3F]">Our Headquarters</h3>
                    <p className="text-slate-600">Executive Center, BKC, Mumbai, Maharashtra 400051</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#00BFFF]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#001F3F]">Call Us</h3>
                    <p className="text-slate-600">+91 22 4567 8900</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#00BFFF]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#001F3F]">Email Us</h3>
                    <p className="text-slate-600">contact@astc-search.com</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-[#001F3F] rounded-3xl text-white space-y-6">
                <div className="flex items-center gap-4">
                  <Calendar className="w-8 h-8 text-[#00BFFF]" />
                  <h3 className="text-2xl font-bold">Book a Strategy Call</h3>
                </div>
                <p className="text-slate-300">Schedule a 30-minute consultation with one of our Managing Partners to discuss your leadership needs.</p>
                <Button className="bg-[#00BFFF] hover:bg-[#0099CC] text-white w-full py-6 rounded-xl text-lg">
                  View Calendar
                </Button>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100">
              <h2 className="text-3xl font-bold text-[#001F3F] mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <Input placeholder="John Doe" className="py-6 rounded-xl border-slate-200" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Work Email</label>
                    <Input type="email" placeholder="john@company.com" className="py-6 rounded-xl border-slate-200" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Company Name</label>
                  <Input placeholder="Acme Corp" className="py-6 rounded-xl border-slate-200" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Industry</label>
                  <select className="w-full p-4 rounded-xl border border-slate-200 bg-white text-slate-700 focus:ring-2 focus:ring-[#00BFFF] outline-none">
                    <option>Healthcare</option>
                    <option>Tech Startup</option>
                    <option>FMCG</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">How can we help?</label>
                  <Textarea placeholder="Tell us about your search requirements..." className="min-h-[150px] rounded-xl border-slate-200" required />
                </div>
                <Button type="submit" className="w-full bg-[#001F3F] hover:bg-[#003366] text-white py-7 rounded-xl text-lg font-bold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;