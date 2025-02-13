import { FC, InputHTMLAttributes, LabelHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>
    label?: string
}

const InputWithLabel: FC<InputProps> = ({ label, labelProps, ...inputProps }) => {
  return (
    <>
      {
        label &&
            <label {...labelProps}>
              {label}
            </label>
      }
      <input 
        {...inputProps}
      />
    </>
  )}

export default InputWithLabel