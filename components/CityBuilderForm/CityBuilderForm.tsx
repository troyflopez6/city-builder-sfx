import { FC } from 'react'
import CityForm from './components/CityForm'

interface CityBuilderFormProps {
  
}

const CityBuilderForm: FC<CityBuilderFormProps> = ({}) => {
  return (
    <div className='min-w-72 border rounded-lg'>
      <div className=' bg-gray-300 p-3 flex items-center'>
            Houses List
      </div>
      <div>
        <CityForm />
      </div>
    </div>
  )}

export default CityBuilderForm