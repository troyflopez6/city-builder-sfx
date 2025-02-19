'use client'
import { buildingListSelector } from '@/redux/features/building/selector'
import { FC, memo } from 'react'
import { useSelector } from 'react-redux'
import City from './components/City/City'

const CityList: FC = () => {
  const buildingList = useSelector(buildingListSelector)
  
  return (
    <div className='w-full h-full flex gap-4 border rounded overflow-x-auto'>
      {
        buildingList?.map(({ building_id, color, floors, house_name }, i) => (
          <City
            key={`${i}_${building_id}` }
            building_id={building_id}
            color={color}
            floors={floors}
            house_name={house_name}
          />

        ))
      }
    </div>
  )}

export default memo(CityList)