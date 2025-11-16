import React, { useEffect, useState } from "react";
import MegaMenu from "../Pages/MegaMenu"

const MegaMenuData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/MegaMenu.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  const datas = data.slice(0,10);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 container mx-auto">
      {datas.map((item) => (
        <MegaMenu key={item.id} product={item} />
      ))}
    </div>
  );
};

export default MegaMenuData;
