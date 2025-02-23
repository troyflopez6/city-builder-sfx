import { TBuilding } from '@/types/building.type'
import { CSSProperties, FC } from 'react'

type TFloorProps = {
  isLastFloor: boolean
  color: TBuilding['color']
}

const Floor: FC<TFloorProps> = ({ color, isLastFloor }) => {
  const styling: CSSProperties = {
    backgroundColor: color,
  }
  return (
    <>

      <div className={`floor ${isLastFloor ? 'border-y-2' : 'border-y-0'}`} style={styling}>
        <div className='window'></div>
        <div className='window'></div>
      </div>

    </>
  )}

export default Floor