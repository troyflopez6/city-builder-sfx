import { Building } from '@/types/building.type'
import { CSSProperties, FC, memo } from 'react'

interface FloorProps {
  isLastFloor: boolean
  color: Building['color']
}

const Floor: FC<FloorProps> = ({ color, isLastFloor }) => {
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

export default memo(Floor)