'use client'
import { CityBuilderContext } from '@/contexts/CityBuilderContext'
import { FC, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CityBuilderForm from '../CityBuilderForm/CityBuilderForm'

interface CreateBuildingModalProps {
}

const CreateBuildingModalContent: FC<CreateBuildingModalProps> = () => {
  const { openModal, setOpenModal } = useContext(CityBuilderContext)

  return (
    <>
      {
        openModal && 
        <div className='absolute size-full top-0  flex items-center justify-center'>
          <div className='absolute size-full top-0 bg-black bg-opacity-80' onClick={() => setOpenModal(false)}>
          </div>
          <div className='bg-white rounded z-10'>
            <CityBuilderForm building_id={uuidv4()} isCreateNewCity={true} label='Create new house'  />
          </div>
        </div>
      }
    </>
  )}

export default CreateBuildingModalContent