'use client'
import CityBuilderForm from '@/components/CityBuilderForm/CityBuilderForm'
import CityList from '@/components/CityList/CityList'
import CreateBuildingModalContent from '@/components/CreateBuildingModal/CreateBuildingModal'
import Modal from '@/components/Modal/Modal'
import useBuildingManger from '@/hooks/useBuildingManager'
import { FC } from 'react'

const Homepage: FC = () => {
  const { state, setModalOpen, deleteBuilding, addBuilding, duplicateBuilding, updateBuilding } = useBuildingManger()
  const { buildingList, openModal } = state

  return (
    <>
      <CityBuilderForm
        buildingList={buildingList}
        setModalOpen={setModalOpen}
        deleteBuilding={deleteBuilding}
        updateBuilding={updateBuilding}
      />
      <CityList
        buildingList={buildingList}
        duplicateBuilding={duplicateBuilding}
      />
      <Modal
        selector='#overlay'
      >
        <CreateBuildingModalContent
          openModal={openModal}
          setModalOpen={setModalOpen}
          addBuilding={addBuilding}
        />
      </Modal>
    </>
  )}

export default Homepage