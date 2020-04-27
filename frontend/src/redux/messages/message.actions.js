// types
import { MessageActionType } from './message.types';

export const getErrors = (msg, status) => {
  return {
    type: MessageActionType.GET_ERRORS,
    payload: { msg, status},
  }
}