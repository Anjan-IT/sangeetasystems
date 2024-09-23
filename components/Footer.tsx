"use client"
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Information */}
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center sm:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">SANGEETA Systems</h3>
            <motion.div
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="text-sm sm:text-base"
            >
              <p>PT.1579 V R COLONY GOPAL, SERILINGAMPALLY</p>
              <p className="mb-2">HYDERABAD, TELANGANA-500085.</p>
              <p>10.00 AM – 7.00 PM</p>
            </motion.div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Services", "Careers", "Blog", "Contact"].map(
                (link, index) => (
                  <motion.li key={index}>
                    <Link href="#" passHref>
                      <motion.span
                        className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base cursor-pointer"
                        whileHover={{ x: 5 }}
                        style={{ display: "inline-block" }}
                      >
                        {link}
                      </motion.span>
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact Us</h3>
            <motion.div
              className="flex items-center justify-center sm:justify-start mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span className="mr-2" whileHover={{ rotate: 20 }}>
                📧
              </motion.span>
              <a href="mailto:info@sangeetasystems.com" className="text-sm sm:text-base">
                info@sangeetasystems.com
              </a>
            </motion.div>
            <motion.div
              className="flex items-center justify-center sm:justify-start mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span className="mr-2" whileHover={{ rotate: 20 }}>
                📞
              </motion.span>
              <a href="tel:+917396691030" className="text-sm sm:text-base">+91 7396691030</a>
            </motion.div>
            <motion.button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us
            </motion.button>
          </div>

          {/* Column 4: Social Media & Newsletter */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center sm:justify-start mb-4">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/company/sangeeta-systems", icon: "L" },
                { name: "Twitter", url: "https://twitter.com/sangeetasystems", icon: "T" },
                { name: "Facebook", url: "https://www.facebook.com/sangeetasystems", icon: "F" },
                { name: "Instagram", url: "https://www.instagram.com/sangeetasystems", icon: "I" }
              ].map(
                (social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="mr-4 text-lg sm:text-xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </motion.a>
                )
              )}
            </div>
            <h4 className="text-base sm:text-lg font-semibold mb-2">Newsletter</h4>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 w-full text-black mb-2 sm:mb-0 sm:mr-2"
              />
              <motion.button
                type="submit"
                className="bg-blue-500 text-white p-2 w-full sm:w-auto"
                whileHover={{ scale: 1.05, backgroundColor: "#3182ce" }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;