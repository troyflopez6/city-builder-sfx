import { FC, memo } from 'react'

interface RoofProps {
}

const Roof: FC<RoofProps> = () => {
  return (
    <div className="roof">
      <div className="roof-background">
      </div>
    </div>
  )}

export default  memo(Roof)