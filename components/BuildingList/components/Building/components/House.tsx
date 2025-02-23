import { TBuilding } from '@/types/building.type'
import { CSSProperties, FC, memo } from 'react'

interface HouseProps {
  color: TBuilding['color']
  isOnlyOneFloor: boolean
}

const House: FC<HouseProps> = ({ color, isOnlyOneFloor }) => {
  const styling: CSSProperties = {
    backgroundColor: color,
  }

  return (
    <div className={`house ${isOnlyOneFloor ? 'border-t-2' : 'border-t-0'}`} style={styling}>
      <div className='door'>
      </div>
      <div className='window'></div>
    </div>
  )}

export default memo(House)