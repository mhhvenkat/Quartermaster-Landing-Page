
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, QuantumComputerScene } from './components/QuantumScene';
import { SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, BookOpen } from 'lucide-react';

const AuthorCard = ({ name, role, delay }: { name: string, role: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-xs hover:border-nobel-gold/50" style={{ animationDelay: delay }}>
      <h3 className="font-sans font-semibold text-2xl text-stone-900 text-center mb-3">{name}</h3>
      <div className="w-12 h-0.5 bg-nobel-gold mb-4 opacity-60"></div>
      <p className="text-xs text-stone-500 font-bold uppercase tracking-widest text-center leading-relaxed">{role}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Account for fixed header offset
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className={`font-sans text-lg tracking-wide transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              <span className="font-bold">QUARTERMASTER</span> <span className="font-normal">INVESTOR RELATIONS</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#introduction" onClick={scrollToSection('introduction')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">About</a>
            <a href="#science" onClick={scrollToSection('science')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Services</a>
            <a href="#impact" onClick={scrollToSection('impact')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Approach</a>
            <a href="#authors" onClick={scrollToSection('authors')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Founder</a>
            <a
              href="https://calendly.com/quartermaster-ir"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
            >
              Book a Call
            </a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-sans font-medium animate-fade-in">
            <a href="#introduction" onClick={scrollToSection('introduction')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">About</a>
            <a href="#science" onClick={scrollToSection('science')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Services</a>
            <a href="#impact" onClick={scrollToSection('impact')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Approach</a>
            <a href="#authors" onClick={scrollToSection('authors')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Founder</a>
            <a
              href="https://calendly.com/quartermaster-ir"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 bg-stone-900 text-white rounded-full shadow-lg cursor-pointer"
            >
              Book a Call
            </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.92)_0%,rgba(249,248,244,0.6)_50%,rgba(249,248,244,0.3)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/30">
            For European Real Estate
          </div>
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-[0.9] mb-8 text-stone-900 drop-shadow-sm">
            Your quarterly reports, simplified
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
            We produce the quarterly investor reports your capital partners expect—market commentary, portfolio updates, strategic narrative.
          </p>
          
          <div className="flex justify-center">
             <a href="#introduction" onClick={scrollToSection('introduction')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
                <span>LEARN MORE</span>
                <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Introduction */}
        <section id="introduction" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">The Challenge</div>
              <h2 className="font-sans text-4xl font-semibold mb-6 leading-tight text-stone-900">Quarterly Reports Are Essential. They're Not Your Business.</h2>
              <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
            </div>
            <div className="md:col-span-8 text-lg text-stone-600 leading-relaxed space-y-6">
              <p>
                <span className="text-5xl float-left mr-3 mt-[-8px] font-sans font-bold text-nobel-gold">Y</span>our investors expect a professional update every quarter. They want market context, portfolio performance, and strategic outlook. But producing this takes time—time your IR team should spend on capital raising, and time your investment team should spend on deals.
              </p>
              <p>
                <strong className="text-stone-900 font-medium">Quartermaster</strong> handles the quarterly reporting workflow. We embed into your process, work with your data and templates, and deliver reports that meet institutional standards. Your investors stay informed. Your team stays focused.
              </p>
            </div>
          </div>
        </section>

        {/* The Science: Surface Code */}
        <section id="science" className="py-24 bg-white border-t border-stone-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                            <BookOpen size={14}/> WHAT GETS DONE
                        </div>
                        <h2 className="font-sans text-4xl md:text-5xl font-semibold mb-6 text-stone-900">The Reports Your Investors Expect</h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                           We produce the reports your investors expect each quarter: investor letters, presentations, market overviews, and portfolio commentary. Clear narratives that communicate performance, strategy, and outlook—without pulling your team away from investing.
                        </p>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                            Your fund administrators provide the numbers. We provide the narrative—translating performance into context, and data into confidence.
                        </p>
                    </div>
                    <div>
                        <SurfaceCodeDiagram />
                    </div>
                </div>
            </div>
        </section>

        {/* The Science: Transformer Decoder */}
        <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                {/* Decorative background pattern - Gold/Stone theme */}
                <div className="w-96 h-96 rounded-full bg-stone-600 blur-[100px] absolute top-[-100px] left-[-100px]"></div>
                <div className="w-96 h-96 rounded-full bg-nobel-gold blur-[100px] absolute bottom-[-100px] right-[-100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div className="order-2 lg:order-1">
                        <TransformerDecoderDiagram />
                     </div>
                     <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                            HOW WE WORK
                        </div>
                        <h2 className="font-sans text-4xl md:text-5xl font-semibold mb-6 text-white">Embedded in Your Team</h2>
                        <p className="text-lg text-stone-400 mb-6 leading-relaxed">
                            We don't impose a template. We work within your existing formats, style guides, and brand. Your investors see continuity; your team gains capacity.
                        </p>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            Think of it as co-sourcing: you own the strategy and output, we provide the resource to execute it. Quarterly, on schedule, without the overhead of a full-time hire.
                        </p>
                     </div>
                </div>
            </div>
        </section>

        {/* The Science: Results */}
        <section className="py-24 bg-[#F9F8F4]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="font-sans text-4xl md:text-5xl font-semibold mb-6 text-stone-900">Built for Managers Who Need Quality, Not Headcount</h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        We work with private real estate fund managers and GPs managing £100M to £5B in AUM. Firms with institutional capital partners who expect quarterly reporting—but without the scale to justify a dedicated analyst. Core, value-add, opportunistic, development. UK-based, expanding across Europe. If you're reporting to investors quarterly and your team's time is better spent elsewhere, we can help.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <PerformanceMetricDiagram />
                </div>
            </div>
        </section>

        {/* Impact */}
        <section id="impact" className="py-24 bg-white border-t border-stone-200">
             <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5 relative">
                    <div className="aspect-square bg-[#F5F4F0] rounded-xl overflow-hidden relative border border-stone-200 shadow-inner">
                        <QuantumComputerScene />
                        <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-stone-400 font-sans italic"></div>
                    </div>
                </div>
                <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">YOUR FOCUS</div>
                    <h2 className="font-sans text-4xl font-semibold mb-6 text-stone-900">Free Up Time for What Drives Returns</h2>
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                        Quarterly reporting is essential but rarely urgent—until the deadline hits. By then, your IR team is mid-campaign and your investment team is deep in diligence. Something gets compressed.
                    </p>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                        With Quartermaster, the work is off your plate before the crunch. Your investors get a polished update. Your team stays focused on sourcing, executing, and raising capital—the activities that actually drive returns.
                    </p>

                    <div className="p-6 bg-[#F9F8F4] border border-stone-200 rounded-lg border-l-4 border-l-nobel-gold">
                        <p className="font-sans font-medium italic text-xl text-stone-800 mb-4">
                            "Great investor communication isn't about more information. It's about clear narrative, delivered consistently."
                        </p>
                        <span className="text-sm font-bold text-stone-500 tracking-wider uppercase">— Quartermaster</span>
                    </div>
                </div>
             </div>
        </section>

        {/* Authors */}
        <section id="authors" className="py-24 bg-[#F5F4F0] border-t border-stone-300">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">FOUNDER</div>
                    <h2 className="font-sans text-3xl md:text-5xl font-semibold mb-4 text-stone-900">About</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">A decade of experience in UK real estate investment and strategy.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap">
                    <AuthorCard
                        name="Mahesh Venkat"
                        role="Founder • Former Head of Strategy, Lendlease"
                        delay="0s"
                    />
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-sans font-bold text-2xl mb-2">Quartermaster Investor Relations</div>
                <p className="text-sm">Investment Reporting for European Real Estate.</p>
            </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600">
            © 2026 Quartermaster Investor Relations
        </div>
      </footer>
    </div>
  );
};

export default App;
