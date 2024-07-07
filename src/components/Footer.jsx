import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-300 py-8 mt-8"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
            <p className="text-white mb-1">123 Street</p>
            <p className="text-white">Ottawa, ON, K1N 7R2</p>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-white mb-2">Opening Hours</h4>
            <p className="text-white mb-1">Mon - Fri: 9:00 AM - 8:00 PM</p>
            <p className="text-white">Sat - Sun: 10:00 AM- 7:00 PM</p>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-white mb-2">Phone Number</h4>
            <p className="text-white">+1 234 567 8910</p>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-white hover:text-blue-200 underline">Home</a></li>
              <li><a href="/services" className="text-white hover:text-blue-200 underline">Services</a></li>
              <li><a href="/team" className="text-white hover:text-blue-200 underline">Team</a></li>
              <li><a href="/blogs" className="text-white hover:text-blue-200 underline">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
