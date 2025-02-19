import { Building } from '@/types/building.type'
import { CSSProperties, FC, memo } from 'react'

interface HouseProps {
  color: Building['color']
  floors: Building['floors']
}

const House: FC<HouseProps> = ({ color, floors }) => {
  const styling: CSSProperties = {
    backgroundColor: color,
  }
  return (
    <div className={`house ${floors === 1 ? 'border-t-2' : 'border-t-0'}`} style={styling}>
      <div className='door'>
      </div>
      <div className='window'></div>
    </div>
  )}

export default memo(House)