
'use client'
import BuildingBuilderForm from '@/components/BuildingBuilderForm/BuildingBuilderForm';
import BuildingList from '@/components/BuildingList/BuildingList';
import CreateBuildingModal from '@/components/CreateBuildingModal/CreateBuildingModal';
import Modal from '@/components/Modal/Modal';
import { BUILDING_BUILDER } from '@/constants/buildingKeys';
import { PersistedData, setBuilding } from '@/redux/features/building/slice';
import { getDataFromLocalStorage } from '@/utils/localstorageUtil';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = getDataFromLocalStorage<PersistedData>(BUILDING_BUILDER)
      if (data && data?.buildingBuilder) {
        const { buildingList } = data?.buildingBuilder
        dispatch(setBuilding(buildingList))
      }
    }
  }, [dispatch]);

  return (
    <main className='p-3 flex gap-10 h-[calc(100vh-4rem)]'>
      <BuildingBuilderForm />
      <BuildingList />
      <Modal
        selector='#overlay'
      >
        <CreateBuildingModal/>
      </Modal>
    </main>
  )
}

export default Home 