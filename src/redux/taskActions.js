import { GET_TASKS } from "./constants"

export const getTasks = (filter) => {
  return {type: GET_TASKS, filter};
}