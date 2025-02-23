import { BUILDING_BUILDER } from '@/constants/buildingKeys';
import { saveDataToLocalStorage } from '@/utils/localstorageUtil';
import { TBuildingBuilderState } from '../features/building/slice';

const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  
  const state: TBuildingBuilderState = store.getState();
  saveDataToLocalStorage(BUILDING_BUILDER, state)
  
  return result;
};

export { localStorageMiddleware };

