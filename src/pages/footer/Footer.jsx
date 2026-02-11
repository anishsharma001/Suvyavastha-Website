import React, { useRef, useEffect } from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Logo from "../../assets/logo/whiteLogo.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const topRef = useRef(null);
  const linksRef = useRef([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      });

      tl.fromTo(
        topRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          linksRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .fromTo(
          bottomRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="font-inter text-white bg-gradient-to-r from-[#040D75] to-[#5804BF]"
    >
      <div className="p-8 md:p-10 lg:p-14">

        {/* Row 1 */}
        <div ref={topRef} className="mb-12">
          <img
            src={Logo}
            alt="Suvyavastha Technologies Pvt. Ltd."
          />
          <p className="mt-4 text-sm text-white/80 max-w-md">
            Long-term engineering partner for business-critical systems
          </p>
        </div>

        {/* Row 2 */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-16 gap-y-10 text-sm">

            {[
              {
                title: "Company",
                items: ["About Us", "Careers"],
              },
              {
                title: "What We Build",
                items: ["Services", "Industries"],
              },
              {
                title: "Resources",
                items: ["Blogs"],
              },
              {
                title: "Legal",
                items: ["Privacy Policy", "Terms of Service"],
              },
            ].map((section, index) => (
              <div
                key={section.title}
                ref={(el) => (linksRef.current[index] = el)}
              >
                <h4 className="font-medium mb-3">
                  {section.title}
                </h4>

                <ul className="space-y-2 text-white/80">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="
                        cursor-pointer
                        transition-all duration-300
                        hover:text-white
                        hover:translate-x-1
                      "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

        {/* Row 3 */}
        <div
          ref={bottomRef}
          className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-white/70">
            © Suvyavastha Technologies Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex gap-4">
            {[Instagram, Facebook, Linkedin].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    transition-all duration-300
                    hover:scale-110
                    hover:-translate-y-1
                  "
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
