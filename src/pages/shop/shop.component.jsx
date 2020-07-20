import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import Collection from "../../components/collection-preview/collection-preview.component";

export default function ShopPage() {
  const [collection] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collection.map((items) => (
        <Collection
          key={items.id}
          title={items.title}
          items={items.items}
          routeName={items.routeName}
        />
      ))}
    </div>
  );
}
