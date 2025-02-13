import InputWithLabel from '@/components/UI/InputWithLabel/InputWithLabel'
import SelectWithLabel from '@/components/UI/SelectWithLabel/SelectWithLabel'
import { FC } from 'react'

interface CityFormProps {
  
}
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

const CityForm: FC<CityFormProps> = ({}) => {
  return (
    <form className='flex flex-col gap-2 px-4 py-2'>
      <div className='flex justify-between'>
        <p>
            House 1
        </p>
        <button>
            Delete
        </button>
      </div>
      <div>
        <div className='grid grid-cols-2 gap-2 items-center'>
          <div>
            <InputWithLabel
              className='h-5 w-12 text-center border border-solid rounded'
              name='floors'
              type='number'
              max={10}
              min={1}
              labelProps={{
                htmlFor: 'floors',
              }}
              label='Floors: '
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
              }}
              options={options}
            />
          </div>
          <InputWithLabel 
            className='block accent-slate-500'
            name='floors'
            type="range" 
            max={10} 
            min={1} 
          />
        </div>
      </div>
    
    </form>
  )}

export default CityForm