import { FC } from 'react'
import City from './components/City/City'

interface CityProps {
  
}

const CityList: FC<CityProps> = ({}) => {
  return (
    <div className='w-full h-full flex gap-4 border rounded'>
      <City />
    </div>
  )}

export default CityList