// save localStorage data
const getInstallData = () => {
  const storeInstallApp = localStorage.getItem("install-app");
  if (storeInstallApp) {
    const data = JSON.parse(storeInstallApp);
    return data;
  } else {
    return [];
  }
};
//add to collection server to data
const addToCollectionInsatllData = (id) => {
  const addToCollection = getInstallData();
  if (addToCollection.includes(id)) {
    return alert("sorry age thake data ace");
  } else {
    addToCollection.push(id);
    const data = JSON.stringify(addToCollection);
    localStorage.setItem("install-app", data);
  }
};
export { addToCollectionInsatllData };
