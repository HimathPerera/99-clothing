import React from "react";

import "./with-spinner.styles.scss";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherPrpos }) => {
    return isLoading ? (
      <div className="container">
        <div className="lds-circle">
          <div></div>
        </div>
        <div className="loading-text">
          <h2>loading...</h2>
        </div>
      </div>
    ) : (
      <WrappedComponent {...otherPrpos} />
    );
  };
  return Spinner;
};

export default WithSpinner;
