import React, { useState, useEffect } from 'react';
import { Droplets, Users, Target, Waves, AlertCircle, Menu, X, ArrowRight, CheckCircle, Send } from 'lucide-react';

export default function HydraHopeLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    organization: '',
    amount: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (formType) => {
    let message = '';
    
    switch(formType) {
      case 'volunteer':
        message = `Thank you ${formData.name}! Your volunteer application has been submitted.`;
        break;
      case 'donate':
        message = `Thank you for your generous donation!`;
        break;
      case 'partner':
        message = `Thank you ${formData.organization}! Your partnership request has been received.`;
        break;
      default:
        message = 'Your message has been sent successfully!';
    }
    
    setToastMessage(message);
    setShowToast(true);
    setActiveModal(null);
    setFormData({ name: '', email: '', phone: '', message: '', organization: '', amount: '' });
    
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const openModal = (modalType) => {
    setActiveModal(modalType);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Toast */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 animate-slide-in">
          <div className="bg-emerald-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3">
            <CheckCircle className="h-5 w-5" />
            <p className="font-medium">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-40 transition-all ${scrolled ? 'bg-white shadow-sm' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('top')}>
              <Droplets className="h-8 w-8 text-blue-600 transition-transform group-hover:scale-110 animate-float" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Hydra Hope</h1>
                <p className="text-xs text-blue-600">Clean Water, Bright Future</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('mission')} className="text-gray-600 hover:text-blue-600 transition">Mission</button>
              <button onClick={() => scrollToSection('challenges')} className="text-gray-600 hover:text-blue-600 transition">Challenges</button>
              <button onClick={() => scrollToSection('activities')} className="text-gray-600 hover:text-blue-600 transition">Activities</button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition">Contact</button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('mission')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">Mission</button>
              <button onClick={() => scrollToSection('challenges')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">Challenges</button>
              <button onClick={() => scrollToSection('activities')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">Activities</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-blue-600 font-semibold">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="droplet"></div>
          <div className="droplet"></div>
          <div className="droplet"></div>
          <div className="droplet"></div>
          <div className="droplet"></div>
          <div className="droplet"></div>
          <div className="droplet"></div>
          <div className="droplet"></div>
          <div className="droplet"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="ripple-effect inline-block rounded-full mb-8">
            <Droplets className="h-16 w-16 text-blue-600 mx-auto animate-float" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 fade-in-up">
            Hydra Hope
          </h1>
          <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6 fade-in-up" style={{animationDelay: '0.2s'}}>
            Clean Water, Bright Future
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto fade-in-up" style={{animationDelay: '0.4s'}}>
            Our mission is to bring hope and health to Tunisian communities by ensuring access to clean water and sanitation for everyone, everywhere.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2 hover:scale-105 transform fade-in-up" style={{animationDelay: '0.6s'}}>
              Join Our Mission
              <ArrowRight className="h-5 w-5" />
            </button>
            {/* "Visit our site" button removed as requested */}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600">Our mission is to ensure safe and reliable access to clean water and to promote sustainable sanitation management for all communities in Tunisia. We work to improve living conditions, protect public health, and preserve the country’s precious water resources for future generations..</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl card-hover">
              <div className="ripple-effect inline-block rounded-full mb-4">
                <Waves className="h-12 w-12 text-blue-600 animate-wave" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Goal</h3>
              <p className="text-gray-600">We believe that access to clean water and proper sanitation is not a privilege but a fundamental right. Our foundation is dedicated to ensuring that every person in Tunisia can benefit from safe, sustainable, and dignified water and sanitation services..</p>
            </div>

            <div className="bg-white p-8 rounded-xl card-hover">
              <div className="ripple-effect inline-block rounded-full mb-4">
                <Droplets className="h-12 w-12 text-blue-600 animate-float" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why It Matters</h3>
              <p className="text-gray-600">Water is essential for life, health, and development. By promoting sustainable water management and sanitation practices, we aim to protect this vital resource and secure a better future for people and the planet.</p>
            </div>

            <div className="bg-white p-8 rounded-xl card-hover">
              <AlertCircle className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
              <p className="text-gray-600">Despite progress, millions of people in Tunisia continue to face challenges in accessing safe water and sanitation. We are dedicated to building sustainable solutions that protect water resources, support communities, and promote long-term well-being for all.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-6 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">The Crisis in Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">26%</div>
              <p>Lack access to safely managed drinking water</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">19%</div>
              <p>Without safely managed sanitation</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">30%</div>
              <p>Water demand increase by 2030</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">2.3M</div>
              <p>m³ untreated wastewater (2021)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section id="challenges" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Key Challenges</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Water Scarcity', desc: 'By 2030, water demand will increase by 30%.' },
              { title: 'Sanitation Crisis', desc: 'Poor sanitation increases infection risks.' },
              { title: 'Environmental Impact', desc: 'Overuse harms rivers, lakes, and wildlife.' },
              { title: 'Health Risks', desc: 'Increased waterborne diseases.' },
              { title: 'Daily Life Impact', desc: 'Hours lost fetching water instead of school or work.' },
              { title: 'Wastewater', desc: '2.3M m³ of collected wastewater remains untreated (2021).' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl card-hover">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Activities</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 ripple-effect">
                <Waves className="h-8 w-8 text-blue-600 animate-wave" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Infrastructure</h3>
              <p className="text-gray-600">Building water facilities and improving sanitation infrastructure.</p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
              <p className="text-gray-600">Promoting hygiene education and awareness in communities.</p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Campaigns</h3>
              <p className="text-gray-600">Conducting campaigns on water conservation and safe practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Involved</h2>
          <p className="text-xl text-gray-600 mb-6">Join our mission to bring clean water to every corner of Tunisia.</p>

          <div className="mb-8">
            
            <p className="text-gray-700">Email: <a href="mailto:aqua.rebels@gmail.com" className="text-blue-600">aqua.rebels@gmail.com</a></p>
            <p className="text-gray-700">Phone: <span className="text-blue-600">29888095</span></p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <button onClick={() => openModal('volunteer')} className="bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition hover:scale-105 transform">
              Volunteer
            </button>
            <button onClick={() => openModal('donate')} className="bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition hover:scale-105 transform">
              Donate
            </button>
            <button onClick={() => openModal('partner')} className="bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 transition hover:scale-105 transform">
              Partner
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Droplets className="h-8 w-8 text-blue-400 animate-float" />
            <div>
              <h3 className="font-bold">Hydra Hope</h3>
              <p className="text-sm text-gray-400">Clean Water, Bright Future</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">© 2025 Hydra Hope</p>
            <p className="text-gray-500 text-sm mt-1">Contact: aqua.rebels@gmail.com — 29888095</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-2xl font-bold text-gray-900">
                {activeModal === 'volunteer' && 'Volunteer Application'}
                {activeModal === 'donate' && 'Make a Donation'}
                {activeModal === 'partner' && 'Partnership Request'}
              </h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-900">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {activeModal === 'volunteer' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Why volunteer? *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="Tell us your motivation..."
                    />
                  </div>
                </>
              )}

              {activeModal === 'donate' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amount (TND) *</label>
                    <input
                      type="number"
                      name="amount"
                      min="1"
                      value={formData.amount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="100"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                      placeholder="Optional message..."
                    />
                  </div>
                </>
              )}

              {activeModal === 'partner' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization *</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Organization name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="contact@organization.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Proposal *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                      placeholder="Describe your proposal..."
                    />
                  </div>
                </>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSubmit(activeModal)}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 text-white ${
                    activeModal === 'volunteer' ? 'bg-blue-600 hover:bg-blue-700' :
                    activeModal === 'donate' ? 'bg-emerald-600 hover:bg-emerald-700' :
                    'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  <Send className="h-4 w-4" />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in { animation: slide-in 0.3s ease-out; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); }
        }

        @keyframes droplet-fall {
          0% { transform: translateY(-100vh) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) scale(1); opacity: 0; }
        }

        @keyframes ripple { 0% { transform: scale(0.8); opacity: 1; } 100% { transform: scale(2.5); opacity: 0; } }
        @keyframes wave {
          0%,100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(5px) translateY(-5px); }
          50% { transform: translateX(0) translateY(-10px); }
          75% { transform: translateX(-5px) translateY(-5px); }
        }

        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-wave { animation: wave 4s ease-in-out infinite; }

        .droplet {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(59, 130, 246, 0.6);
          border-radius: 50%;
          animation: droplet-fall linear infinite;
          pointer-events: none;
        }

        .droplet:nth-child(1) { left: 10%; animation-duration: 3s; animation-delay: 0s; }
        .droplet:nth-child(2) { left: 20%; animation-duration: 4s; animation-delay: 1s; }
        .droplet:nth-child(3) { left: 30%; animation-duration: 3.5s; animation-delay: 0.5s; }
        .droplet:nth-child(4) { left: 40%; animation-duration: 4.5s; animation-delay: 1.5s; }
        .droplet:nth-child(5) { left: 50%; animation-duration: 3.2s; animation-delay: 0.8s; }
        .droplet:nth-child(6) { left: 60%; animation-duration: 4.2s; animation-delay: 2s; }
        .droplet:nth-child(7) { left: 70%; animation-duration: 3.8s; animation-delay: 1.2s; }
        .droplet:nth-child(8) { left: 80%; animation-duration: 4s; animation-delay: 0.3s; }
        .droplet:nth-child(9) { left: 90%; animation-duration: 3.6s; animation-delay: 1.8s; }

        .ripple-effect { position: relative; }
        .ripple-effect::before { content: ''; position: absolute; inset: 0; border-radius: inherit; border: 2px solid rgba(59, 130, 246, 0.4); animation: ripple 2s ease-out infinite; }
        .ripple-effect::after { content: ''; position: absolute; inset: 0; border-radius: inherit; border: 2px solid rgba(59, 130, 246, 0.3); animation: ripple 2s ease-out infinite; animation-delay: 1s; }

        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-8px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); }

        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in-up { animation: fade-in-up 0.8s ease-out; }
      `}</style>
    </div>
  );
}
