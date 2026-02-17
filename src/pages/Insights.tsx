"use client";

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const Insights = () => {
  const posts = [
    {
      title: "The Role of AI in Fair Executive Hiring",
      category: "AI Trends",
      date: "Oct 12, 2023",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Healthcare Leadership Trends for 2024",
      category: "Industry Report",
      date: "Sep 28, 2023",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Scaling Culture: A Guide for Startup Founders",
      category: "Leadership",
      date: "Sep 15, 2023",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const handleDownload = () => {
    showSuccess("Your report download has started!");
  };

  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-[#001F3F] mb-6">Insights & Thought Leadership</h1>
              <p className="text-xl text-slate-600">Stay ahead of the curve with our latest research on AI, leadership, and industry trends.</p>
            </div>
            <Button className="bg-[#001F3F] text-white rounded-full px-8 py-6">
              Subscribe to Newsletter
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {posts.map((post, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm group"
              >
                <div className="h-64 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#00BFFF] font-bold text-sm uppercase tracking-wider">{post.category}</span>
                    <span className="text-slate-400 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#001F3F] leading-tight group-hover:text-[#00BFFF] transition-colors">{post.title}</h3>
                  <Button variant="link" className="p-0 text-[#001F3F] font-bold group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-[40px] p-12 md:p-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-[#001F3F]">Download Our 2024 Talent Report</h2>
                <p className="text-lg text-slate-600">A comprehensive analysis of executive compensation and talent movement across Healthcare, Tech, and FMCG in India.</p>
                <Button 
                  onClick={handleDownload}
                  className="bg-[#00BFFF] hover:bg-[#0099CC] text-white rounded-full px-10 py-7 text-lg"
                >
                  Download Report <Download className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="relative">
                <div className="bg-white p-4 rounded-2xl shadow-2xl rotate-3">
                  <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800" alt="Report Cover" className="rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Insights;