import { RootReducerState } from '@/redux/reducers';

const isOpenModalSelector = (state: RootReducerState) => state.buildingBuilder?.openModal

const buildingListSelector = (state: RootReducerState) => state.buildingBuilder?.buildingList

const currentBuildingSelector = (state: RootReducerState) =>  state.buildingBuilder?.buildingList

export { buildingListSelector, currentBuildingSelector, isOpenModalSelector };

