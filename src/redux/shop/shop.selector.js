import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopItemsForOverview = createSelector(
  [selectShopItems],
  (shopData) =>
    shopData ? Object.keys(shopData).map((key) => shopData[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopItems], (shopData) =>
    shopData ? shopData[collectionUrlParam] : null
  );
