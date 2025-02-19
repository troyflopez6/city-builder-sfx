import { RootReducerState } from '@/redux/reducers';

const isOpenModalSelector = (state: RootReducerState) => state.cityBuilder.openModal

const buildingListSelector = (state: RootReducerState) => state.cityBuilder.buildingList

const currentBuildingSelector = (state: RootReducerState) =>  state.cityBuilder.buildingList

export { buildingListSelector, currentBuildingSelector, isOpenModalSelector };

