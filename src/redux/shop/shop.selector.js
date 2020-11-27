import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.shopData
);

export const selectShopItemsForOverview = createSelector(
  [selectShopItems],
  (shopData) => Object.keys(shopData).map((key) => shopData[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopItems], (shopData) => shopData[collectionUrlParam]);
