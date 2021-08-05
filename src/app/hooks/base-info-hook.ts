import { useState, useEffect } from 'react';

export const useDemohooks = () => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    setContent('test');
  }, []);

  return {
    content
  };
};
