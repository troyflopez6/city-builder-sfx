import { FC } from 'react'

interface CityProps {
  
}

const City: FC<CityProps> = ({}) => {
  return (
    <div className='rounded flex flex-col justify-end p-10 h-full w-32'>
      <div className="roof">
        <div className="roof-background">
        </div>
      </div>
      <div className="floor bg-red-800">
        <div className='window'></div>
        <div className='window'></div>
      </div>
      <div className='house bg-red-800'>
        <div className='door'>
        </div>
        <div className='window'></div>
      </div>
    </div>
  )}

export default City