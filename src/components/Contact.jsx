import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Instant smooth frontend submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 relative bg-gray-50/50 dark:bg-[#15151F]/40 border-t border-gray-200/60 dark:border-[#2A2A3A]/60">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-[#241F3D] text-purple-700 dark:text-purple-300 mb-3 border border-purple-200 dark:border-purple-500/30">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Let's Collaborate on Your Next Project
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Have a project in mind, seeking a Java Full Stack Developer, or discussing opportunities? Reach out below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white dark:bg-[#1B1B28] rounded-2xl p-6 sm:p-8 border border-gray-200/80 dark:border-[#2A2A3A] shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                
                {/* Email with direct mailto redirect */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/40 flex items-center justify-center text-[#EA4335] flex-shrink-0 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</div>
                    <a 
                      href={`mailto:${personal.email}`}
                      className="text-sm sm:text-base font-bold text-gray-900 dark:text-white hover:text-[#EA4335] dark:hover:text-[#F87171] transition-colors underline-offset-4 hover:underline"
                    >
                      {personal.email}
                    </a>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">Click to send direct email</div>
                  </div>
                </div>

                {/* Location: Hyderabad */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950/40 flex items-center justify-center text-[#00C2A8] flex-shrink-0 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</div>
                    <div className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                      {personal.location}
                    </div>
                    <div className="text-[11px] text-teal-600 dark:text-teal-400 mt-0.5 font-medium">Available for Hybrid & Remote Roles</div>
                  </div>
                </div>

                {/* Availability status */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-[#241F3D] flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0 shadow-sm">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Availability</div>
                    <div className="text-sm sm:text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      Open for Opportunities
                    </div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">Java Full Stack & Backend Roles</div>
                  </div>
                </div>

              </div>

              {/* Colorful Online Profiles */}
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-[#2A2A3A]">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3.5">
                  Connect Online
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  
                  {/* Colorful LinkedIn */}
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white text-xs font-bold border border-[#0A66C2]/30 transition-all duration-200 shadow-sm hover:scale-105"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  {/* Colorful GitHub */}
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-900/10 dark:bg-white/10 hover:bg-gray-900 dark:hover:bg-white text-gray-900 dark:text-white hover:text-white dark:hover:text-black text-xs font-bold border border-gray-300 dark:border-white/20 transition-all duration-200 shadow-sm hover:scale-105"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  {/* Colorful Mail Button */}
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#EA4335]/10 hover:bg-[#EA4335] text-[#EA4335] hover:text-white text-xs font-bold border border-[#EA4335]/30 transition-all duration-200 shadow-sm hover:scale-105"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Mail</span>
                  </a>

                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#1B1B28] rounded-2xl p-6 sm:p-8 border border-gray-200/80 dark:border-[#2A2A3A] shadow-sm relative">
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6">
                Fill in the details below, and I will get back to you promptly.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/60 flex items-center gap-3 text-emerald-800 dark:text-emerald-300 animate-fadeIn">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-500" />
                  <span className="text-xs sm:text-sm font-semibold">
                    Thank you, your message has been received! I'll reply via {personal.email} soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Your Name <span className="text-purple-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-[#15151F] border border-gray-200 dark:border-[#2A2A3A] focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-sm text-gray-900 dark:text-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Your Email <span className="text-purple-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-[#15151F] border border-gray-200 dark:border-[#2A2A3A] focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-sm text-gray-900 dark:text-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Java Developer Role / Project Collaboration / Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-[#15151F] border border-gray-200 dark:border-[#2A2A3A] focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-sm text-gray-900 dark:text-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Message <span className="text-purple-500">*</span>
                  </label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, position, or message here..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#15151F] border border-gray-200 dark:border-[#2A2A3A] focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-sm text-gray-900 dark:text-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
