import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection-page">
      <div className="items">
        {collection ? (
          collection.items.map((items) => (
            <CollectionItem item={items} key={items.id} />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
