import React, { useState } from "react";

import SHOP_DATA from "./data";

import Previews from "../../components/preview/previews";

const ShopPage = () => {
  const [data, setData] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {data.map(({ id, ...otherCollectionProps }) => (
        <Previews key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
