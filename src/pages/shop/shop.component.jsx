import React, { useEffect } from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../../pages/collection/collection.component";

import { Route } from "react-router-dom";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.action";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import "./shoppage.styles.scss";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({
  match,
  collectioIsFetching,
  fetchCollectionStartAsync,
}) => {
  useEffect(() => {
    fetchCollectionStartAsync();
  }, [fetchCollectionStartAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner
            isLoading={collectioIsFetching}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={collectioIsFetching}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collectioIsFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
