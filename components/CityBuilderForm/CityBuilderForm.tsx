'use client'
import { setOpenModal } from '@/redux/features/building/slice'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { HomeIcon } from '../Icons/Icons'
import CityForm from './components/CityForm'
import CityFormList from './components/CityFormList'

interface CityBuilderFormProps {
  label?: string
  isCreateNewCity?: boolean
}

const CityBuilderForm: FC<CityBuilderFormProps> = ({ isCreateNewCity, label= 'Houses List' }) => {
  const dispatch = useDispatch()

  return (
    <div className='min-w-72 border rounded-lg flex flex-col'>
      <div className=' bg-gray-300 p-3 flex items-center justify-between'>
        <p>
          {label}
        </p>
        {
          isCreateNewCity && 
          <button className='p-1 cursor-pointer' onClick={() => dispatch(setOpenModal(false))}>
            X
          </button>
        }
      </div>
      <CityFormList
        isCreateNewCity={isCreateNewCity}
      />
      {
        isCreateNewCity &&
          <CityForm
            isCreateNewCity={isCreateNewCity}
          />
      }

      {!isCreateNewCity && 
        <div className=' bg-gray-300 p-3 flex items-center justify-center'>
          <button className='rounded border-slate-500 p-1 cursor-pointer border bg-blue-400 flex items-center gap-4 font-bold text-white hover:bg-blue-300' onClick={() => dispatch(setOpenModal(true))}>
            <HomeIcon />
            <p>Create a new house</p>
          </button>
        </div>
      }
    </div>
  )}

export default CityBuilderForm