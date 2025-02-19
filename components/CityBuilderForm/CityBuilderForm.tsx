/* eslint-disable no-unused-vars */
'use client'
import { BuildingWithoutId } from '@/hooks/useCityForm'
import { Building } from '@/types/building.type'
import { FC, FormEvent, memo } from 'react'
import { HomeIcon } from '../Icons/Icons'
import CityForm from './components/CityForm'

interface CityBuilderFormProps {
  label?: string
  isCreateNewCity?: boolean
  buildingList?: Building[]
  setModalOpen?: (_open: boolean) => void
  deleteBuilding?: (_building_id: string) => void
  addBuilding?:  ({ e, building }: {e: FormEvent<HTMLFormElement>, building: BuildingWithoutId}) => void
  updateBuilding?: (building: Building) => void
}

const CityBuilderForm: FC<CityBuilderFormProps> = ({ 
  isCreateNewCity,
  label= 'Houses List',
  buildingList = [],
  setModalOpen,
  deleteBuilding,
  addBuilding,
  updateBuilding,
}) => {
  return (
    <div className='min-w-72 border rounded-lg flex flex-col'>
      <div className=' bg-gray-300 p-3 flex items-center justify-between'>
        <p>
          {label}
        </p>
        {
          isCreateNewCity && 
          <button className='p-1 cursor-pointer' onClick={() => setModalOpen?.(false)}>
            X
          </button>
        }
      </div>
      <div className='h-full overflow-y-auto'>
        {!isCreateNewCity && buildingList.map((building, i) => (
          <CityForm 
            key={i} 
            isCreateNewCity={isCreateNewCity} 
            building={building} 
            deleteBuilding={deleteBuilding}
            updateBuilding={updateBuilding}
          />
        ))
        }
        {
          isCreateNewCity &&
          <CityForm
            isCreateNewCity={isCreateNewCity}
            addBuilding={addBuilding}
          />
        }
      </div>

      {!isCreateNewCity && 
        <div className=' bg-gray-300 p-3 flex items-center justify-center'>
          <button
            className='rounded border-slate-500 p-1 cursor-pointer border bg-blue-400 flex items-center gap-4 font-bold text-white hover:bg-blue-300'
            onClick={() => setModalOpen?.(true)}
          >
            <HomeIcon />
            <p>Create a new house</p>
          </button>
        </div>
      }
    </div>
  )}

export default memo(CityBuilderForm)