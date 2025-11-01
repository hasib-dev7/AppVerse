import { useState, useEffect } from "react";

const useLoadingSpinner = (duration = 2000) => {
  const [loadingHook, setLoadingHook] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingHook(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return loadingHook;
};

export default useLoadingSpinner;
