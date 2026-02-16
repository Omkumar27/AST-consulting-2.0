"use client";

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Clock, Target } from 'lucide-react';

const Placements = () => {
  const cases = [
    {
      title: "Chief Executive Officer",
      industry: "Healthcare Scaleup",
      challenge: "Finding a leader with both clinical expertise and experience scaling a VC-backed startup.",
      result: "Placed in 42 days. 30% faster than industry average. Candidate achieved 2x revenue growth in Year 1.",
      metrics: ["42 Days to Hire", "100% Retention", "2x Growth"]
    },
    {
      title: "Chief Technology Officer",
      industry: "Fintech Unicorn",
      challenge: "Identifying a CTO capable of managing a 500+ person engineering team through an IPO.",
      result: "AI-driven sourcing identified a passive candidate from a global tech giant. Seamless transition and successful IPO.",
      metrics: ["Global Search", "IPO Ready", "95% Culture Fit"]
    },
    {
      title: "Marketing Director",
      industry: "Global FMCG",
      challenge: "Replacing a long-tenured leader with a digital-first innovator without disrupting brand heritage.",
      result: "Predictive analytics identified a rising star from a competing sector. Brand digital engagement increased by 40%.",
      metrics: ["Digital Transformation", "40% Engagement Lift", "Diverse Hire"]
    }
  ];

  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl font-bold text-[#001F3F] mb-6">Success Stories</h1>
            <p className="text-xl text-slate-600">Our track record speaks for itself. We don't just fill roles; we build leadership legacies.</p>
          </div>

          <div className="space-y-12">
            {cases.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden"
              >
                <div className="grid lg:grid-cols-3">
                  <div className="p-8 md:p-12 lg:col-span-2 space-y-8">
                    <div>
                      <span className="text-[#00BFFF] font-bold text-sm uppercase tracking-wider">{item.industry}</span>
                      <h2 className="text-3xl font-bold text-[#001F3F] mt-2">{item.title}</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <h4 className="font-bold text-[#001F3F] flex items-center gap-2">
                          <Target className="w-5 h-5 text-[#00BFFF]" /> The Challenge
                        </h4>
                        <p className="text-slate-600 leading-relaxed">{item.challenge}</p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-bold text-[#001F3F] flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-[#00BFFF]" /> The Result
                        </h4>
                        <p className="text-slate-600 leading-relaxed">{item.result}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#001F3F] p-8 md:p-12 flex flex-col justify-center space-y-8">
                    <h4 className="text-white font-bold text-xl border-b border-white/10 pb-4">Key Metrics</h4>
                    <div className="space-y-6">
                      {item.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-5 h-5 text-[#00BFFF]" />
                          </div>
                          <span className="text-white font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Placements;