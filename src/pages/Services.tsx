"use client";

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Target, ShieldCheck, Users, BarChart3, Zap, Globe, MessageSquare, Award, RefreshCw } from 'lucide-react';

const Services = () => {
  const aiPlan = [
    { step: 1, title: "AI-Driven Sourcing", icon: Search, desc: "Scanning millions of profiles across global databases to find hidden talent." },
    { step: 2, title: "Predictive Analytics", icon: BarChart3, desc: "Forecasting candidate success based on historical performance data." },
    { step: 3, title: "Bias Elimination", icon: ShieldCheck, desc: "Using AI to ensure fair screening and diverse candidate pools." },
    { step: 4, title: "Cultural Alignment", icon: Target, desc: "Mapping candidate values to organizational culture using NLP." },
    { step: 5, title: "Market Intelligence", icon: Globe, desc: "Real-time data on compensation trends and talent availability." },
    { step: 6, title: "Automated Outreach", icon: Zap, desc: "Personalized engagement at scale to capture passive talent." },
    { step: 7, title: "Skill Verification", icon: Award, desc: "AI-assisted technical and leadership competency assessments." },
    { step: 8, title: "Sentiment Analysis", icon: MessageSquare, desc: "Analyzing interview feedback for deeper behavioral insights." },
    { step: 9, title: "Network Mapping", icon: Users, desc: "Visualizing candidate connections and industry influence." },
    { step: 10, title: "Continuous Learning", icon: RefreshCw, desc: "Refining search parameters based on placement outcomes." },
  ];

  return (
    <PageLayout>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl font-bold text-[#001F3F] mb-6">Our Services</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We combine the precision of artificial intelligence with the nuance of human judgment to deliver executive search results that are 3x faster and significantly more accurate.
            </p>
          </div>

          <Tabs defaultValue="plan" className="w-full">
            <TabsList className="bg-white p-1 rounded-full border border-slate-200 mb-12 inline-flex">
              <TabsTrigger value="plan" className="rounded-full px-8 py-3 data-[state=active]:bg-[#001F3F] data-[state=active]:text-white">10-Point AI Plan</TabsTrigger>
              <TabsTrigger value="sourcing" className="rounded-full px-8 py-3 data-[state=active]:bg-[#001F3F] data-[state=active]:text-white">Executive Sourcing</TabsTrigger>
              <TabsTrigger value="advisory" className="rounded-full px-8 py-3 data-[state=active]:bg-[#001F3F] data-[state=active]:text-white">Board Advisory</TabsTrigger>
            </TabsList>

            <TabsContent value="plan">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {aiPlan.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-[#00BFFF]/10 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-[#00BFFF]" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step {item.step}</span>
                    <h3 className="text-lg font-bold text-[#001F3F] mt-1 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sourcing">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#001F3F]">Precision Executive Sourcing</h2>
                    <p className="text-lg text-slate-600">Our core search methodology leverages proprietary AI models to identify candidates who aren't just looking for a job, but are ready for their next career-defining challenge.</p>
                    <ul className="space-y-4">
                      {[
                        "Global talent mapping across 50+ countries",
                        "Deep-dive behavioral assessments",
                        "Confidential outreach and engagement",
                        "Comprehensive background and reference checks"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-[#00BFFF]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Sourcing" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advisory">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="rounded-2xl overflow-hidden order-2 lg:order-1">
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Advisory" className="w-full h-auto" />
                  </div>
                  <div className="space-y-6 order-1 lg:order-2">
                    <h2 className="text-3xl font-bold text-[#001F3F]">Board & Leadership Advisory</h2>
                    <p className="text-lg text-slate-600">Beyond search, we help boards and founders build resilient leadership structures that can navigate the complexities of the modern market.</p>
                    <ul className="space-y-4">
                      {[
                        "Succession planning and talent pipelining",
                        "Board composition and effectiveness reviews",
                        "Leadership development and coaching",
                        "Organizational design for high-growth startups"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-[#00BFFF]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
);

export default Services;