 
import { Building } from '@/types/building.type';

export type Action =
  | { type: 'CREATE_BUILDING'; payload: Building }
  | { type: 'DELETE_BUILDING'; payload: Building['building_id'] }
  | { type: 'UPDATE_BUILDING'; payload: Building }
  | { type: 'SET_MODAL_OPEN'; payload: boolean }
  | { type: 'SET_FLOOR'; payload: number }
  | { type: 'SET_HOUSE_NAME'; payload: string }
  | { type: 'SET_COLOR'; payload: string }

