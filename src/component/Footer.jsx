import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const footerLinks = [
    {
      title: 'About Us',
      links: [
        { name: 'Our Mission', href: '#' },
        { name: 'Team', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Impact', href: '#' },
      ],
    },
    {
      title: 'Events',
      links: [
        { name: 'Upcoming Events', href: '#' },
        { name: 'Past Events', href: '#' },
        { name: 'Webinars', href: '#' },
        { name: 'Workshops', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Media Kit', href: '#' },
        { name: 'Contact Us', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: 'facebook', href: '#', label: 'Facebook' },
    { icon: 'twitter', href: '#', label: 'Twitter' },
    { icon: 'instagram', href: '#', label: 'Instagram' },
    { icon: 'youtube', href: '#', label: 'YouTube' },
  ];

  return (
    <footer 
      className="bg-white border-t border-gray-200 pt-12 pb-8"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="mb-6">
              <Link to="/">
                <img 
                  src="https://samarthanamusa.org/wp-content/uploads/2023/07/samarthanam-trust-for-the-disabled-logo.jpg" 
                  alt="Samarthanam Trust for the Disabled" 
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Empowering lives through our various initiatives and programs. Join us in our mission to create a more inclusive society.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center transition-colors hover:bg-red-600 hover:text-white text-gray-600"
                >
                  {link.icon === 'facebook' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  )}
                  {link.icon === 'twitter' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  )}
                  {link.icon === 'instagram' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  )}
                  {link.icon === 'youtube' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-gray-900 font-medium mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Samarthanam Trust for the Disabled. All rights reserved.
          </p>
          <div className="flex items-center text-gray-600 text-sm">
            <a href="#" className="hover:text-red-600 transition-colors mr-6">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 transition-colors mr-6">Terms of Service</a>
            <a href="#" className="hover:text-red-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 