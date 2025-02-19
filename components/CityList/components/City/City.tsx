import { Building } from '@/types/building.type'
import { CSSProperties, FC, memo } from 'react'

interface CityProps {
  building: Building
  duplicateBuilding:(_building: Building) => void
}

const City: FC<CityProps> = ({ building, duplicateBuilding }) => {
  const { color, floors, house_name } = building
  const middleFloors = floors - 1
  const styling: CSSProperties = {
    backgroundColor: color,
  }

  return (
    <div className='rounded flex flex-col justify-end px-10 py-5 h-full'>
      <div className="roof">
        <div className="roof-background">
        </div>
      </div>
      {
        Array.from(Array(middleFloors), (_,i) => {
          const isLastFloor = i === 0
          return ( 
            <div className={`floor ${isLastFloor ? 'border-y-2' : 'border-y-0'}`} style={styling} key={i}>
              <div className='window'></div>
              <div className='window'></div>
            </div>
          )
        })
      }
      <div className={`house ${floors === 1 ? 'border-t-2' : 'border-t-0'}`} style={styling}>
        <div className='door'>
        </div>
        <div className='window'></div>
      </div>
      <div className='text-lg font-bold text-center capitalize text-wrap min-h-7'>
        {house_name}
      </div>
      <button 
        className='rounded border-slate-500 p-1 cursor-pointer border bg-blue-400 flex items-center gap-4 font-bold text-white hover:bg-blue-300 justify-center'
        onClick={() => duplicateBuilding(building)}
      >
        Duplicate
      </button>
    </div>
  )}

export default memo(City)