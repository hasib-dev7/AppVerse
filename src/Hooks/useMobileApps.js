import axios from "axios";
import { useEffect, useState } from "react";

const useMobileApps = () => {
  const [mobileApps, setMobileApps] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fatchMobileApps = async () => {
      try {
        setLoading(true);
        setError(null);
        const respons = await axios("../mobileApps.json");
        setMobileApps(respons.data);
      } catch (err) {
        setError(err.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fatchMobileApps();
  }, []);
  return [mobileApps, loading, error];
};
export default useMobileApps;
