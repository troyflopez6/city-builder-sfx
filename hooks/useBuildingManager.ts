import { buildingReducer } from '@/reducers/cityBuilderReducer/reducer'
import { buildingReducerInitialState } from '@/reducers/cityBuilderReducer/state'
import { Building } from '@/types/building.type'
import { FormEvent, useCallback, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BuildingWithoutId } from './useCityForm'

const useBuildingManager = () => {
  const [state, dispatch] = useReducer(buildingReducer, buildingReducerInitialState)

  const addBuilding = ( { e,  building }:{e: FormEvent<HTMLFormElement>, building:BuildingWithoutId}) => {
    e.preventDefault()
    const newBuilding: Building = {
      ...building,
      building_id: uuidv4(),
    }
    dispatch({ type: 'CREATE_BUILDING', payload: newBuilding })
    dispatch({ type: 'SET_MODAL_OPEN', payload: false })
  }

  const duplicateBuilding = useCallback((building: Building) => {
    const duplicate: Building = {
      ...building,
      building_id: uuidv4(),
    }
    dispatch({ type: 'CREATE_BUILDING', payload: duplicate })
  },[])

  const deleteBuilding = (building_id: string) => {
    dispatch({ type: 'DELETE_BUILDING', payload: building_id })
  }

  const updateBuilding = useCallback((building:Building) => {
    dispatch({ type: 'UPDATE_BUILDING', payload: building })
  }, [])

  const setModalOpen = useCallback((open: boolean) => {
    dispatch({ type: 'SET_MODAL_OPEN', payload: open })
  },[])

  return { 
    state, 
    addBuilding, 
    deleteBuilding,
    updateBuilding,
    setModalOpen,
    duplicateBuilding,
  }
}

export default useBuildingManager