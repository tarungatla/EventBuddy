// Use the 'client' environment for this module
'use client';

import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

//functional component for rendering navigation items
const NavItems = () => {
  // Get the current pathname using usePathname hook
  const pathname = usePathname();
  // Render a list of navigation items based on headerLinks constant
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        // Check if the current link is active by comparing its route with the current pathname
        const isActive = pathname === link.route;

        return (
          // Render each navigation item as a list item
          <li
            key={link.route}
            className={`${
              // Apply 'text-primary-500' class if the link is active
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            {/* Use the Link component from Next.js for client-side navigation */}
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavItems;
