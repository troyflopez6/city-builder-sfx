import { FC, LabelHTMLAttributes, OptionHTMLAttributes, SelectHTMLAttributes } from 'react'

export type SelectWithLabelProps = SelectHTMLAttributes<HTMLSelectElement> & {
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>
    selectProps?: SelectHTMLAttributes<HTMLSelectElement>
    label?: string
    options?: {
        label?: string
        optionProps: OptionHTMLAttributes<HTMLOptionElement>
    }[]
    building_color?: string
}

const SelectWithLabel: FC<SelectWithLabelProps> = ({ label, labelProps, selectProps, options }) => {
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