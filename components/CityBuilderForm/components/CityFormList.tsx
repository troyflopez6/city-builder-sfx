'use client'
import { buildingListSelector } from '@/redux/features/building/selector'
import { FC, memo } from 'react'
import { useSelector } from 'react-redux'
import CityForm from './CityForm'

interface CityFormListProps {
    isCreateNewCity?: boolean
}

const CityFormList: FC<CityFormListProps> = ({ isCreateNewCity }) => {
  const buildingList = useSelector(buildingListSelector)
  return (
    <div className='h-full overflow-y-auto'>
      {!isCreateNewCity && buildingList?.map((building) => (
        <CityForm 
          key={building.building_id} 
          isCreateNewCity={isCreateNewCity} 
          building={building}
        />
      ))
      }
    </div>
  )}

export default memo(CityFormList)