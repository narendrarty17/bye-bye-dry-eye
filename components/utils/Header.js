import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import linksList from '@/public/data/navLinkList.json';

const Header = () => {
  // States
  const [activeLink, setActiveLink] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const router = useRouter();

  // If you only want the path without query parameters
  const currentPath = router.pathname;

  const toggleMenu = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  }

  const settingActiveLinkByURL = () => {
    const currentLink = linksList.find(link => link.url === currentPath);
    setActiveLink(currentLink.link);
  }

  const NavLink = ({ link, children, url }) => {
    return (
      <Link
        href={url}
        style={{ display: 'block' }}
        className={`text-white hover:text-gray-300 ${activeLink === link ? 'underline' : ''}`}
      >{children}</Link>
    );
  };

  const Sidebar = ({ linksList, activeLink }) => {
    return (
      <aside className="absolute flex flex-col items-center bg-dark-blue text-white p-4 right-0 w-1/2 h-auto overflow-y-auto z-10">
        {/* Sidebar content */}
        <nav className="space-y-4">
          {linksList.map((link, index) => (
            <NavLink
              key={index}
              link={link.link}
              activeLink={activeLink}
              url={link.url}
            >
              {link.linkText}
            </NavLink>
          ))}
        </nav>
      </aside>
    );
  };

  useEffect(() => {
    settingActiveLinkByURL();

    const handleResize = () => {
      // Set showMenu to true when screen size is below md breakpoint
      setShowMenu(window.innerWidth < 768); // 768px is the md breakpoint
      setShowSidebar(window.innerWidth < 768 && showSidebar);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check on mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showSidebar]);

  return (
    <div className="text-white">
      <div className="flex items-center justify-between w-full bg-dark-blue pl-2 pr-6 py-3">
        {/* Company Logo with Name */}
        <div className="flex items-center ml-0 lg:ml-5">
          <img className="w-16" src="/images/utils/header/logo.png" />
          <div className="flex flex-col justify-center items-center font-alegreya">
            <span className="text-[16px] mb-[-8px] font-semibold">ByeBye</span>
            <span className="text-[22px] font-bold">Dry Eye</span>
          </div>
        </div>
        {/* Whatsapp Number */}
        <div className="hidden md:flex gap-3">
          <img className="w-8" src="/images/utils/header/whatsapp.svg" />
          <span className="text-lg">+91-9919748714</span>
        </div>
        {/* Navigation Links */}
        <nav className="flex gap-6">
          {!showMenu && (
            <div className="flex gap-8 text-[17px]">
              {linksList.map((link, index) => (
                <NavLink
                  key={index}
                  link={link.link}
                  activeLink={activeLink}
                  url={link.url}
                >{link.linkText}</NavLink>
              ))}
            </div>
          )}
          {!showMenu && (
            <span>|</span>
          )}
          <div className="flex gap-4 items-center">
            <img className="w-6" src="/images/utils/header/cart.svg" />
            <img className="w-6" src="/images/utils/header/profile.svg" />
          </div>
        </nav>

        {/* Menu for Sidebar Only show on small screens */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <img
            src="/images/utils/header/menu.svg"
            alt="menu"
            className="ml-8 h-6 w-6"
          />
        </button>
      </div>
      {/* Sidebar */}
      {
        showSidebar && (
          <Sidebar
            linksList={linksList}
            activeLink={activeLink}
          />
        )
      }
      <div className="w-full text-sm font-semibold h-8 bg-dark-green flex justify-center items-center">
        Free Cash on Delivery on All orders
      </div>
    </div>
  );
};

export default Header;
