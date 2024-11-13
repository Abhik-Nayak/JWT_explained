import { useEffect } from 'react';

const useAutoLogout = (logout) => {
  useEffect(() => {
    let timeout;
    const resetTimeout = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        logout();
      }, 15 * 60 * 1000); // 15 minutes
    };

    window.addEventListener('mousemove', resetTimeout);
    window.addEventListener('keypress', resetTimeout);

    resetTimeout(); // Initialize timeout

    return () => {
      window.removeEventListener('mousemove', resetTimeout);
      window.removeEventListener('keypress', resetTimeout);
    };
  }, [logout]);
};

export default useAutoLogout;
