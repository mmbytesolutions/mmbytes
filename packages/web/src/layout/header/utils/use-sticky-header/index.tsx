'use client';

import { useEffect, useState } from 'react';

export function useStickyHeader(scrollThreshold: number): boolean {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isHeaderSticky = window.scrollY > scrollThreshold;
      setIsSticky(isHeaderSticky);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollThreshold]);

  return isSticky;
}
