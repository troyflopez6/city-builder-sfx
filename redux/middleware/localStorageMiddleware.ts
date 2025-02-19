import { CITY_BUILDER } from '@/constants/buildingKeys';
import { saveDataToLocalStorage } from '@/utils/localstorageUtil';
import { CityBuilderState } from '../features/building/slice';

const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  
  const state: CityBuilderState = store.getState();
  saveDataToLocalStorage(CITY_BUILDER, state)
  
  return result;
};

export { localStorageMiddleware };

