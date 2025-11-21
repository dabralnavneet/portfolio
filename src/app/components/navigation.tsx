'use client';

import { useState, useEffect } from 'react';
import { IconHome, IconBriefcase, IconTool, IconMail } from '@tabler/icons-react';

const navItems = [
  { id: 'home', label: 'Home', icon: IconHome },
  { id: 'toolkit', label: 'Toolkit', icon: IconTool },
  { id: 'experience', label: 'Experience', icon: IconBriefcase },
  { id: 'contact', label: 'Contact', icon: IconMail },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide nav on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      let foundActive = false;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (within 200px from top)
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            foundActive = true;
            break;
          }
        }
      }

      // If at the very top, set home as active
      if (!foundActive && currentScrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (sectionId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        // Calculate the exact position with offset for fixed nav
        const yOffset = -90; // Negative offset to account for fixed nav
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <nav
      className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
      }`}
    >
      <div className="bg-[#f4e2c5cc] backdrop-blur-xl border border-[#E9D5B4] rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.18)] transition-all duration-300">
        <ul className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#3C2C26] text-[#F4E2C5] shadow-lg'
                      : 'text-[#3C2C26] hover:bg-[#E9D5B4]'
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  <Icon
                    size={18}
                    className={`transition-transform duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-110'
                    }`}
                  />
                  <span
                    className={`text-sm font-medium transition-all duration-300 hidden sm:block ${
                      isActive
                        ? 'opacity-100 max-w-[100px]'
                        : 'max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100'
                    } overflow-hidden whitespace-nowrap`}
                  >
                    {item.label}
                  </span>

                  {/* Futuristic glow effect */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-[#3C2C26] animate-pulse opacity-20"></span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Futuristic underline indicator */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#3C2C26] to-transparent opacity-30"></div>
    </nav>
  );
}
