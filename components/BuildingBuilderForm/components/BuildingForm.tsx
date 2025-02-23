'use client'
import InputWithLabel from '@/components/UI/InputWithLabel/InputWithLabel'
import SelectWithLabel from '@/components/UI/SelectWithLabel/SelectWithLabel'
import { options } from '@/constants/cityFormOptions'
import useCityForm from '@/hooks/useBuildingForm'
import { createBuilding, deleteBuilding } from '@/redux/features/building/slice'
import { TBuilding } from '@/types/building.type'
import { FC, FormEvent, memo } from 'react'
import { useDispatch } from 'react-redux'

type TBuildingFormProps = {
  isCreateNewCity?: boolean
  building?: TBuilding
}

const BuildingForm: FC<TBuildingFormProps> = ({ isCreateNewCity, building }) => {
  const dispatch = useDispatch()
  const { buildingFormData, onFormDataChange } = useCityForm({ building })
  const { color, floors } = buildingFormData
  const addBuilding = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(createBuilding(buildingFormData))
  }

  return (
    <form className='flex flex-col gap-2 px-4 py-2 border-b-[1px]' onSubmit={addBuilding}>
      <div className={`flex ${isCreateNewCity ? 'gap-2' : 'justify-between'} items-center`}> 
        {
          isCreateNewCity && 
            <InputWithLabel 
              className='h-5 flex-1 p-1 border border-solid rounded'
              name='name'
              type='text'
              autoComplete='additional-name'
              labelProps={{
                htmlFor: 'name',
              }}
              label='House name: '
              onChange={(e) => onFormDataChange({ e, key: 'house_name' })}
              maxLength={15}
            />
        }
        {  !isCreateNewCity && building &&
          <>
            <InputWithLabel 
              className='h-5 w-full p-1 border border-solid rounded mr-5'
              name='name'
              type='text'
              autoComplete='additional-name'
              labelProps={{
                htmlFor: 'name',
                className: 'text-nowrap',
              }}
              label={'Name: '}
              value={building.house_name}
              onChange={(e) => onFormDataChange({ e, key: 'house_name' })}
              maxLength={15}
            />
            <button 
              className='border border-red-400 rounded px-2 hover:bg-red-500 hover:text-white hover:border-slate-500'
              onClick={() => dispatch(deleteBuilding(building.building_id))}
              type='button'
            >
                Delete
            </button>
          </>
        }
      </div>
      <div>
        <div className='grid grid-cols-2 gap-2 items-center'>
          <div>
            <InputWithLabel
              className='h-5 w-12 text-center border border-solid rounded'
              name='floors'
              type='number'
              max={5}
              min={1}
              labelProps={{
                htmlFor: 'floors',
              }}
              label='Floors: '
              value={isCreateNewCity ?  floors : building?.floors}
              onChange={(e) => onFormDataChange({ e, key: 'floors' })}
            />
          </div>
          <div className='flex'>
            <SelectWithLabel
              label= 'Color: '
              labelProps={{
                htmlFor: 'color',
              }}
              selectProps={{
                name:'color',
                className:'border border-solid font-bold rounded',
                onChange: (e) => onFormDataChange({ e, key: 'color' }),
                value: building ? building?.color : color,
              }}
              options={options}
              building_color={building?.color}
            />
          </div>
          <InputWithLabel 
            className='block accent-slate-500'
            name='floors'
            type="range"
            onChange={(e) => onFormDataChange({ e, key: 'floors' })}
            max={5} 
            min={1}
            value={building ? building?.floors : floors}
          />
          {
            isCreateNewCity &&
            <button
              className='border bg-blue-600 rounded p-1 text-white hover:bg-blue-400'
              type='submit'
            >
              Add building
            </button>
          }
        </div>
      </div>
    
    </form>
  )}

export default memo(BuildingForm)