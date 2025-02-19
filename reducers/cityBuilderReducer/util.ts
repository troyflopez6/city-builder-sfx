import { Building } from '@/types/building.type';

export const filterBuildingList = ({ buildingList, building_id }: {buildingList: Building[], building_id: string}): Building[] => {
  const data = buildingList.filter((build) => build.building_id !== building_id)
  return data
}

export const updateBuildingList = ({ buildingList, building }: {buildingList: Building[], building: Building}): Building[] => {
  const updatedBuildingList = buildingList.map((build) => {
    if(build.building_id === building.building_id) {
      return {
        ...build,
        ...building,
      }
    }
    return build
  })

  return updatedBuildingList
}