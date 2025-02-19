import { Building } from '@/types/building.type';

export type TBuildingReducerState = {
    buildingList: Building[],
    color: string,
    floor: number,
    houseName: string,
    openModal: boolean,
}