import React, { useState, useRef, useEffect } from 'react';

/**
 * @typedef {Object} RegistrationFormProps
 * @property {string} title - The title of the registration form
 * @property {string} subtitle - The subtitle of the registration form
 */

/**
 * @param {RegistrationFormProps} props
 */
const RegistrationForm = ({
  title,
  subtitle,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      alert('Registration submitted successfully! We will contact you with further details.');
    }, 1500);
  };

  return (
    <section 
      className="py-20 bg-white"
      id="register"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={cn(
            "text-center mb-16 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <span className="inline-block py-1 px-3 rounded-full bg-red-600/10 text-red-600 text-sm font-medium mb-4">
              {subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className={cn(
            "bg-gray-50 rounded-xl p-8 shadow-md transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-600 focus:ring focus:ring-red-600/20 p-2 border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-600 focus:ring focus:ring-red-600/20 p-2 border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-600 focus:ring focus:ring-red-600/20 p-2 border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-600 focus:ring focus:ring-red-600/20 p-2 border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="participationType" className="block text-sm font-medium text-gray-700">Participation Type</label>
                <select
                  id="participationType"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-600 focus:ring focus:ring-red-600/20 p-2 border"
                >
                  <option value="" disabled selected>Select participation type</option>
                  <option value="individual">Individual</option>
                  <option value="team">Team (5-10 members)</option>
                  <option value="corporate">Corporate Team</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Information</label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Tell us any additional information we should know..."
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-red-600 focus:ring focus:ring-red-600/20 focus:outline-none"
                />
              </div>

              <div className="flex items-start space-x-2">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 rounded border-gray-300 text-red-600 shadow-sm focus:border-red-600 focus:ring focus:ring-red-600/20"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-red-600 hover:underline">terms and conditions</a> and the <a href="#" className="text-red-600 hover:underline">privacy policy</a>.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "w-full rounded-md bg-red-600 hover:bg-red-800 text-white py-3 transition-all duration-300",
                  loading && "opacity-70 cursor-not-allowed"
                )}
              >
                {loading ? "Processing..." : "Register Now"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm; 