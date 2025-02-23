import { TBuilding } from '@/types/building.type'
import { FC } from 'react'

interface HouseNameProps {
  house_name: TBuilding['house_name']
}

const HouseName: FC<HouseNameProps> = ({ house_name }) => {
  return (
    <div className='text-lg font-bold text-center capitalize text-wrap min-h-7'>
      {house_name}
    </div>
  )}

export default HouseName