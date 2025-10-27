import { useState, useEffect } from "react";
import Content from "../Component/Content";
import useMobileApps from "../Hooks/useMobileApps";
import { getInstallData } from "../Utility/addToInstall";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [mobileApps, loading, error] = useMobileApps();
  useEffect(() => {
    const storeInstallation = getInstallData();
    const convetInstallation = storeInstallation.map((id) => parseInt(id));
    setInstallation(convetInstallation);
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  //    filter installation mobile app data
  const isExsitingInstalltion = mobileApps.filter((i) =>
    installation.includes(i.id)
  );
  console.log(isExsitingInstalltion);
  return (
    <>
      <Content>
        <div>
          <h1>installation app</h1>
        </div>
      </Content>
    </>
  );
};

export default Installation;
