import React from 'react';
import { Building2, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient">CareerHub</h3>
                <p className="text-xs text-muted-foreground">Find Your Dream Job</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Connecting talented professionals with amazing opportunities. Your career journey starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/browse" className="text-muted-foreground hover:text-primary transition-colors">
                  Search Jobs
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">For Employers</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/admin/companies" className="text-muted-foreground hover:text-primary transition-colors">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/admin/jobs" className="text-muted-foreground hover:text-primary transition-colors">
                  Manage Jobs
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Employer Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">hello@careerhub.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © 2024 CareerHub. All rights reserved. Made with ❤️ for job seekers worldwide.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;