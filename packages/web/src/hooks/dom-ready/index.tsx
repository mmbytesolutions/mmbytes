'use client';

import { useEffect, useState } from 'react';

export function useDomReady(): boolean {
  const [domReady, setDomReady] = useState<boolean>(false);

  useEffect(() => {
    const handleDomReady = () => {
      setDomReady(true);
    };

    if (
      document.readyState === 'complete' ||
      document.readyState === 'interactive'
    ) {
      handleDomReady();
    } else {
      document.addEventListener('DOMContentLoaded', handleDomReady);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDomReady);
    };
  }, []);

  return domReady;
}
