import { TSelectWithLabelProps } from '@/components/UI/SelectWithLabel/SelectWithLabel'

export type TBuildingBuilderConfig = {
    maxFloor: number
    availableColors: TSelectWithLabelProps['options']
}