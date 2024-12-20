import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className="bg-neutral-800 dark:bg-neutral-900 text-white py-10">
  <div className="container mx-auto px-5 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* About Section */}
    <div>
      <h2 className="text-xl font-bold mb-4">About Us</h2>
      <p className="text-gray-300 text-sm">
        Welcome to our premier art auction platform, where creativity meets opportunity. Explore, bid, and own exquisite artworks.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h2 className="text-xl font-bold mb-4">Quick Links</h2>
      <ul className="space-y-2">
        <li>
          <a href="#home" className="hover:text-[#FFE47A] transition">Home</a>
        </li>
        <li>
          <a href="#products" className="hover:text-[#FFE47A] transition">Auctions</a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#FFE47A] transition">About Us</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#FFE47A] transition">Contact</a>
        </li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <ul className="space-y-2">
        <li>
          <span className="text-gray-300">Email:</span> <a href="mailto:info@artauction.com" className="hover:text-[#FFE47A] transition">info@artauction.com</a>
        </li>
        <li>
          <span className="text-gray-300">Phone:</span> <a href="tel:+123456789" className="hover:text-[#FFE47A] transition">+1 234 567 89</a>
        </li>
        <li>
          <span className="text-gray-300">Address:</span> 123 Art Street, New York, NY
        </li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h2 className="text-xl font-bold mb-4">Follow Us</h2>
      <div className="flex space-x-4">
      <a
        href="#"
        aria-label="Facebook"
        className="text-gray-300 hover:text-[#FFE47A] transition"
      >
        <FaFacebookF size={24} />
      </a>
      <a
        href="#"
        aria-label="Twitter"
        className="text-gray-300 hover:text-[#FFE47A] transition"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="#"
        aria-label="Instagram"
        className="text-gray-300 hover:text-[#FFE47A] transition"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="#"
        aria-label="LinkedIn"
        className="text-gray-300 hover:text-[#FFE47A] transition"
      >
        <FaLinkedinIn size={24} />
      </a>
    </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="mt-8 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
    <p>&copy; 2024 ArtAuction. All Rights Reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default Footer