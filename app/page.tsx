
'use client'
import CityBuilderForm from '@/components/CityBuilderForm/CityBuilderForm';
import CityList from '@/components/CityList/CityList';
import CreateBuildingModal from '@/components/CreateBuildingModal/CreateBuildingModal';
import Modal from '@/components/Modal/Modal';
import { CITY_BUILDER } from '@/constants/buildingKeys';
import { PersistedData, setBuilding } from '@/redux/features/building/slice';
import { getDataFromLocalStorage } from '@/utils/localstorageUtil';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = getDataFromLocalStorage<PersistedData>(CITY_BUILDER)
      if (data) {
        const { buildingList } = data?.cityBuilder
        dispatch(setBuilding(buildingList))
      }
    }
  }, [dispatch]);

  return (
    <main className='p-3 flex gap-10 h-[calc(100vh-4rem)]'>
      <CityBuilderForm />
      <CityList />
      <Modal
        selector='#overlay'
      >
        <CreateBuildingModal/>
      </Modal>
    </main>
  )
}

export default Home 