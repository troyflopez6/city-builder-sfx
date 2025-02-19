/* eslint-disable no-unused-vars */
import InputWithLabel from '@/components/UI/InputWithLabel/InputWithLabel'
import SelectWithLabel from '@/components/UI/SelectWithLabel/SelectWithLabel'
import useCityForm, { BuildingWithoutId } from '@/hooks/useCityForm'
import { Building } from '@/types/building.type'
import { FC, FormEvent } from 'react'

const options = [
  {
    optionProps: {
      value:'#FFA500',
    },
    label: 'Orange',
  },
  {
    optionProps: {
      value:'#DB2D43',
    },
    label: 'Alizarin',
  },
  {
    optionProps: {
      value:'#171696',
    },
    label: 'Belize',
  },
  {
    optionProps: {
      value:'#50C878',
    },
    label: 'Emerald',
  }]
interface CityFormProps {
  isCreateNewCity?: boolean
  building?: Building
  deleteBuilding?: (_building_id: string) => void
  addBuilding?:  ({ e, building }: {e: FormEvent<HTMLFormElement>, building: BuildingWithoutId}) => void
  updateBuilding?: (building: Building) => void
}

const CityForm: FC<CityFormProps> = ({ isCreateNewCity, building, deleteBuilding, addBuilding, updateBuilding }) => {
  const { buildingFormData, onFormDataChange } = useCityForm({ building, updateBuilding })
  const { color, floors } = buildingFormData
  return (
    <form className='flex flex-col gap-2 px-4 py-2 border-b-[1px]' onSubmit={(e) => addBuilding?.({ e, building: buildingFormData })}>
      <div className={`flex ${isCreateNewCity ? 'gap-2' : 'justify-between'} items-center`}> 
        {
          isCreateNewCity && 
            <InputWithLabel 
              className='h-5 flex-1 p-1 border border-solid rounded'
              name='house-name'
              type='text'
              labelProps={{
                htmlFor: 'house-name',
              }}
              label='House name: '
              onChange={(e) => onFormDataChange({ e, key: 'house_name' })}
              maxLength={15}
              placeholder='House 1'
            />
        }
        {  !isCreateNewCity && building &&
          <>
            <InputWithLabel 
              className='h-5 w-full p-1 border border-solid rounded mr-5'
              name='house-name'
              type='text'
              labelProps={{
                htmlFor: 'house-name',
                className: 'text-nowrap',
              }}
              label={'Name: '}
              value={building.house_name}
              onChange={(e) => onFormDataChange({ e, key: 'house_name' })}
              maxLength={15}
            />
            <button 
              className='border border-red-400 rounded px-2 hover:bg-red-500 hover:text-white hover:border-slate-500'
              onClick={() => deleteBuilding?.(building.building_id)}
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
                id: 'color',
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
              Add buiding
            </button>
          }
        </div>
      </div>
    
    </form>
  )}

export default CityForm