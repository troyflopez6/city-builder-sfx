import CityBuilderForm from '@/components/CityBuilderForm/CityBuilderForm';
import CityList from '@/components/CityList/CityList';
import CreateBuildingModal from '@/components/CreateBuildingModal/CreateBuildingModal';
import Modal from '@/components/Modal/Modal';

const Home = () => {
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