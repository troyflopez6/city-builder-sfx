/* eslint-disable no-unused-vars */
'use client'
import { BuildingWithoutId } from '@/hooks/useCityForm'
import { FC, FormEvent } from 'react'
import CityBuilderForm from '../CityBuilderForm/CityBuilderForm'

interface CreateBuildingModalProps {
  openModal: boolean
  setModalOpen: (_open: boolean) => void
  addBuilding?:  ({ e, building }: {e: FormEvent<HTMLFormElement>, building: BuildingWithoutId}) => void
}

const CreateBuildingModalContent: FC<CreateBuildingModalProps> = ({ openModal = false, setModalOpen, addBuilding }) => {

  return (
    <>
      { openModal &&
        <div className='absolute size-full top-0  flex items-center justify-center'>
          <div className='absolute size-full top-0 bg-black bg-opacity-80' onClick={() => setModalOpen(false)}>
          </div>
          <div className='bg-white rounded z-10'>
            <CityBuilderForm 
              isCreateNewCity={true}  
              label='Create new house'
              addBuilding={addBuilding}
              setModalOpen={setModalOpen}
            />
          </div>
        </div>
      }
    </>

  )}

export default CreateBuildingModalContent