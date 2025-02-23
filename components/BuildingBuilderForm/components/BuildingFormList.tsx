'use client'
import { buildingListSelector } from '@/redux/features/building/selector'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import BuildingForm from './BuildingForm'

interface BuildingFormListProps {
    isCreateNewCity?: boolean
}

const BuildingFormList: FC<BuildingFormListProps> = ({ isCreateNewCity }) => {
  const buildingList = useSelector(buildingListSelector)
  const buildings = Object.entries(buildingList)

  return (
    <div className='h-full overflow-y-auto'>
      {!isCreateNewCity && buildings?.map(([building_id, building]) => (
        <BuildingForm 
          key={building_id} 
          isCreateNewCity={isCreateNewCity} 
          building={building}
        />
      ))
      }
    </div>
  )}

export default BuildingFormList