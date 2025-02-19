'use client'
import { Building } from '@/types/building.type'
import { FC, memo } from 'react'
import City from './components/City/City'

interface CityListProps {
  buildingList: Building[]
  duplicateBuilding:(_building: Building) => void
}

const CityList: FC<CityListProps> = ({ buildingList, duplicateBuilding }) => {
  return (
    <div className='w-full h-full flex gap-4 border rounded overflow-x-auto'>
      {
        buildingList.map((building, i) => (
          <City
            key={`${i}_${building.building_id}` }
            building={building}
            duplicateBuilding={duplicateBuilding}
          />

        ))
      }
    </div>
  )}

export default memo(CityList)