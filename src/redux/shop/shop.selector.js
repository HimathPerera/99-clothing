import {createSelector} from "reselect"

const COLLECTION_ID_MAP = {
    hats : 1,
    sneakers :2,
    jackets:3,
    womens:4,
    mens:5
} 

const selectShop =state =>state.shop

export const selectShopItems = createSelector(
    [selectShop],
    shop =>shop.shopData
)

export const selectCollection = collectionUrlParam => 
createSelector (
    [selectShopItems],
    shopData => shopData.find(shopData => shopData.id === COLLECTION_ID_MAP[collectionUrlParam])
)