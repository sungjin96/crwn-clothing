import ShopAcitonTypes from "./shop.types";

export const updateCollections = (collectinosMap) => ({
  type: ShopAcitonTypes.UPDATE_COLLECTIONS,
  payload: collectinosMap,
});
