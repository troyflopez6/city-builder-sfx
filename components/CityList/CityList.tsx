'use client'
import { CityBuilderContext } from '@/contexts/CityBuilderContext'
import { FC, useContext } from 'react'
import City from './components/City/City'

const CityList: FC = () => {
  const { buildingList } = useContext(CityBuilderContext)
  return (
    <div className='w-full h-full flex gap-4 border rounded overflow-x-auto'>
      {
        buildingList.map((building, i) => (
          <City
            key={`${i}_${building.building_id}` }
            building={building}
          />

        ))
      }
    </div>
  )}

export default CityList