import React from "react";
import Collection from "../../components/collection-preview/collection-preview.component";

import { connect } from "react-redux";

import { selectShopItemsForOverview } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collection_data }) => (
  <div className="collections-overview">
    {collection_data.map((items) => (
      <Collection
        key={items.id}
        title={items.title}
        items={items.items}
        routeName={items.routeName}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collection_data: selectShopItemsForOverview,
});

export default connect(mapStateToProps)(CollectionOverview);
