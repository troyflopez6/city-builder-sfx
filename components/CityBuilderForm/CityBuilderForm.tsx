'use client'
import { CityBuilderContext } from '@/contexts/CityBuilderContext'
import { FC, useContext } from 'react'
import { HomeIcon } from '../Icons/Icons'
import CityForm from './components/CityForm'

interface CityBuilderFormProps {
  label?: string
  isCreateNewCity?: boolean
  building_id?: string
}

const CityBuilderForm: FC<CityBuilderFormProps> = ({ isCreateNewCity, label= 'Houses List', building_id }) => {
  const { setOpenModal, buildingList } = useContext(CityBuilderContext)

  return (
    <div className='min-w-72 border rounded-lg flex flex-col'>
      <div className=' bg-gray-300 p-3 flex items-center justify-between'>
        <p>
          {label}
        </p>
        {
          isCreateNewCity && 
          <button className='p-1 cursor-pointer' onClick={() => setOpenModal(false)}>
            X
          </button>
        }
      </div>
      <div className='h-full overflow-y-auto'>
        {!isCreateNewCity && buildingList.map((building, i) => (
          <CityForm 
            key={i} 
            isCreateNewCity={isCreateNewCity} 
            building_id={building_id} 
            building={building} 
          />
        ))
        }
        {
          isCreateNewCity &&
          <CityForm
            isCreateNewCity={isCreateNewCity}
            building_id={building_id}
          />
        }
      </div>

      {!isCreateNewCity && 
        <div className=' bg-gray-300 p-3 flex items-center justify-center'>
          <button className='rounded border-slate-500 p-1 cursor-pointer border bg-blue-400 flex items-center gap-4 font-bold text-white hover:bg-blue-300' onClick={() => setOpenModal(true)}>
            <HomeIcon />
            <p>Create a new house</p>
          </button>
        </div>
      }
    </div>
  )}

export default CityBuilderForm