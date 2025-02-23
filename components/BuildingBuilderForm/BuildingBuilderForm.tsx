'use client'
import { setOpenModal } from '@/redux/features/building/slice'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { HomeIcon } from '../Icons/Icons'
import BuildingForm from './components/BuildingForm'
import BuildingFormList from './components/BuildingFormList'

type TBuildingBuilderFormProps = {
  label?: string
  isCreateNewCity?: boolean
}

const BuildingBuilderForm: FC<TBuildingBuilderFormProps> = ({ isCreateNewCity, label= 'Houses List' }) => {
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
      <BuildingFormList
        isCreateNewCity={isCreateNewCity}
      />
      {
        isCreateNewCity &&
          <BuildingForm
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

export default BuildingBuilderForm