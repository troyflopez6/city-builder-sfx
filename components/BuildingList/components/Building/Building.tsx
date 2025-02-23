import { duplicateBuilding } from '@/redux/features/building/slice'
import { TBuilding } from '@/types/building.type'
import { FC, memo } from 'react'
import { useDispatch } from 'react-redux'
import Floor from './components/Floor'
import House from './components/House'
import HouseName from './components/HouseName'
import Roof from './components/Roof'

type TBuildingProps = TBuilding

const Building: FC<TBuildingProps> = ({ color, floors, house_name, building_id }) => {
  const dispatch = useDispatch()
  const duplicate = () => dispatch(duplicateBuilding(building_id))
  const middleFloors = floors - 1
  const isOnlyOnelFloor = floors === 1

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
        isOnlyOneFloor={isOnlyOnelFloor}
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

export default memo(Building)