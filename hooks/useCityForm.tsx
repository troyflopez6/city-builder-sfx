import { Building } from '@/types/building.type'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'

export type BuildingWithoutId = Omit<Building, 'building_id'>

interface UseCityFormProps { 
    building?: Building
    updateBuilding?: (_building: Building) => void
}

const defaultValues:BuildingWithoutId = {
  floors: 1,
  color: '#FFA500',
  house_name: '',
}

const useCityForm = ({ building, updateBuilding }: UseCityFormProps) => {
  const [buildingFormData, setBuildingFormData] = useState<BuildingWithoutId>(building || defaultValues)

  useEffect(() => {
    updateBuilding?.(buildingFormData as Building)
  }, [buildingFormData, updateBuilding])

  const onFormDataChange = useCallback(({ key,  e }: {key: keyof BuildingWithoutId, e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>} ) => {
    const { value } = e.target
    if(key === 'floors') {
      setBuildingFormData((prev) => ({ ...prev, ['floors']: Number(value) }))
    }
    setBuildingFormData((prev) => ({ ...prev, [key]: value }))
    updateBuilding?.(buildingFormData as Building)

  }, [buildingFormData, updateBuilding])

  return {
    buildingFormData,
    onFormDataChange,
  }
}

export default useCityForm