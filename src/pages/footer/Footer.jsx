import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Logo from "../../assets/logo/whiteLogo.png";

const Footer = () => {
  return (
    <footer className="font-inter text-white bg-gradient-to-r from-[#040D75] to-[#5804BF]">
      <div className="p-8 md:p-10 lg:p-14">

        {/* ================= Row 1: Logo + Description ================= */}
        <div className="mb-12">
          <img
            src={Logo}
            alt="Suvyavastha Technologies Pvt. Ltd."
            className=""
          />
          <p className="mt-4 text-sm text-white/80 max-w-md">
            Long-term engineering partner for business-critical systems
          </p>
        </div>

        {/* ================= Row 2: Centered Links ================= */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-16 gap-y-10 text-sm">
            
            {/* Company */}
            <div>
              <h4 className="font-medium mb-3">Company</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
              </ul>
            </div>

            {/* What We Build */}
            <div>
              <h4 className="font-medium mb-3">What We Build</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-white cursor-pointer">Services</li>
                <li className="hover:text-white cursor-pointer">Industries</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-medium mb-3">Resources</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-white cursor-pointer">Blogs</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-medium mb-3">Legal</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-white cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-white cursor-pointer">
                  Terms of Service
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ================= Row 3: Copyright + Social ================= */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/70">
            © Suvyavastha Technologies Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
