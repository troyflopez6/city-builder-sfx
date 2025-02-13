import { SelectWithLabelProps } from '@/components/UI/SelectWithLabel/SelectWithLabel'

export type CityBuilderConfig = {
    maxFloor: number
    availableColors: SelectWithLabelProps['options']
}