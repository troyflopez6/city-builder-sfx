import { TBuildingBuilderConfig } from '@/types/buildingBuilderConfiguration.type';

export const buildingBuilderConfig: TBuildingBuilderConfig = {
  maxFloor: 6,
  availableColors: [
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
    }],
}