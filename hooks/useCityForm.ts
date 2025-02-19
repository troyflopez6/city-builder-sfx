import { updateBuilding } from '@/redux/features/building/slice'
import { Building } from '@/types/building.type'
import { ChangeEvent, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

export type BuildingWithoutId = Omit<Building, 'building_id'>

interface UseCityFormProps { 
    building?: Building
}

const defaultValues:BuildingWithoutId = {
  floors: 1,
  color: '#FFA500',
  house_name: '',
}

const useCityForm = ({ building }: UseCityFormProps) => {
  const [buildingFormData, setBuildingFormData] = useState<BuildingWithoutId>(building || defaultValues)
  const dispatch = useDispatch()

  const onFormDataChange = useCallback(({ key,  e }: {key: keyof BuildingWithoutId, e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>} ) => {
    const { value } = e.target

    if(building) {
      dispatch(updateBuilding({ building, key, value }))
    }
    if(key === 'floors') {
      setBuildingFormData((prev) => ({ ...prev, ['floors']: Number(value) }))
    }
    setBuildingFormData((prev) => ({ ...prev, [key]: value }))

  }, [building, dispatch])

  return {
    buildingFormData,
    onFormDataChange,
  }
}

export default useCityForm