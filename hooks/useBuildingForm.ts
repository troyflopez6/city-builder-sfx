import { updateBuilding } from '@/redux/features/building/slice'
import { TBuilding } from '@/types/building.type'
import { ChangeEvent, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

export type TBuildingWithoutId = Omit<TBuilding, 'building_id'>

interface TUseBuildingFormProps { 
    building?: TBuilding
}

const defaultValues:TBuildingWithoutId = {
  floors: 1,
  color: '#FFA500',
  house_name: '',
}

const useBuildingForm = ({ building }: TUseBuildingFormProps) => {
  const [buildingFormData, setBuildingFormData] = useState<TBuildingWithoutId>(building || defaultValues)
  const dispatch = useDispatch()

  const onFormDataChange = useCallback(({ key,  e }: {key: keyof TBuildingWithoutId, e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>} ) => {
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

export default useBuildingForm