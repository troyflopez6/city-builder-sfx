import { CityBuilderConfig } from '@/types/cityBuilderConfiguration.type';

export const cityBuilderConfig: CityBuilderConfig = {
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