import { FC, LabelHTMLAttributes, OptionHTMLAttributes, SelectHTMLAttributes } from 'react'

export type TSelectWithLabelProps = SelectHTMLAttributes<HTMLSelectElement> & {
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>
    selectProps?: SelectHTMLAttributes<HTMLSelectElement>
    label?: string
    options?: {
        label?: string
        optionProps: OptionHTMLAttributes<HTMLOptionElement>
    }[]
    building_color?: string
}

const SelectWithLabel: FC<TSelectWithLabelProps> = ({ label, labelProps, selectProps, options }) => {
  return (
    <>
      {
        label &&
            <label {...labelProps}>
              {label}
            </label>
      }
      {
        selectProps && options &&
      <select {...selectProps}>
        {
          options.map((option, i) => 
            <option 
              key={`${i}_${option.label}`}
              className='font-bold'
              {...option.optionProps}
            >
              {option.label}
            </option>)
        }
      </select>

      }
    </>
  )}

export default SelectWithLabel