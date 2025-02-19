'use client'
import { isOpenModalSelector } from '@/redux/features/building/selector'
import { setOpenModal } from '@/redux/features/building/slice'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CityBuilderForm from '../CityBuilderForm/CityBuilderForm'

interface CreateBuildingModalProps {
}

const CreateBuildingModalContent: FC<CreateBuildingModalProps> = () => {
  const dispatch = useDispatch()
  const isOpenModal = useSelector(isOpenModalSelector)

  return (
    <>
      {
        isOpenModal && 
        <div className='absolute size-full top-0  flex items-center justify-center'>
          <div className='absolute size-full top-0 bg-black bg-opacity-80' onClick={() => dispatch(setOpenModal(false))}>
          </div>
          <div className='bg-white rounded z-10'>
            <CityBuilderForm 
              isCreateNewCity={true} 
              label='Create new house'
            />
          </div>
        </div>
      }
    </>
  )}

export default CreateBuildingModalContent