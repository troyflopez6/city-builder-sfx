'use client'
import { buildingListSelector } from '@/redux/features/building/selector'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import Building from './components/Building/Building'

const BuildingList: FC = () => {
  const buildingList = useSelector(buildingListSelector)
  const buildings = Object.entries(buildingList)

  return (
    <div className='w-full h-full flex gap-4 border rounded overflow-x-auto'>
      {
        buildings?.map(([building_id, buildingProps], i) => (
          <Building
            key={`${i}_${building_id}` }
            {...buildingProps}
          />
        ))
      }
    </div>
  )}

export default BuildingList