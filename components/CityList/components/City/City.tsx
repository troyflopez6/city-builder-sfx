import { duplicateBuilding } from '@/redux/features/building/slice'
import { Building } from '@/types/building.type'
import { FC, memo, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import Floor from './components/Floor'
import House from './components/House'
import HouseName from './components/HouseName'
import Roof from './components/Roof'

type CityProps = Building

const City: FC<CityProps> = ({ color, floors, house_name, building_id }) => {
  const dispatch = useDispatch()
  const middleFloors = useMemo(() => floors - 1, [floors])

  const duplicate = () => dispatch(duplicateBuilding(building_id))

  return (
    <div className='rounded flex flex-col justify-end px-10 py-5 h-full'>
      <Roof />
      {
        Array.from(Array(middleFloors), (_,i) => {
          const isLastFloor = i === 0
          return ( 
            <Floor 
              key={i}
              isLastFloor={isLastFloor}
              color={color}
            />
          )
        })
      }
      <House 
        color={color} 
        floors={floors}
      />
      <HouseName
        house_name={house_name}
      />
      <button 
        className='rounded border-slate-500 p-1 cursor-pointer border bg-blue-400 flex items-center gap-4 font-bold text-white hover:bg-blue-300 justify-center'
        onClick={duplicate}
      >
        Duplicate
      </button>
    </div>
  )}

export default memo(City)