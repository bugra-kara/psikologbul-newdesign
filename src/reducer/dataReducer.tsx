import { actionType, initialStateInterface } from "../components/Data.types";
import { HANDLE_CHANGE_CITY, HANDLE_CHANGE_CHECKBOX, HANDLE_CHANGE_LANG, HANDLE_CHANGE_BYWHO, HANDLE_DATA} from "../utils/action";

const dataReducer = (state: initialStateInterface, action: actionType) => {
 if(action.type === HANDLE_CHANGE_CHECKBOX) {
  return {...state, [action.payload.target.name]: action.payload.checked}
 }
 if(action.type === HANDLE_CHANGE_CITY) {
  return {...state, city: action.payload.label}
 }
 if(action.type === HANDLE_CHANGE_LANG) {
  return {...state, lang: action.payload.label}
 }
 if(action.type === HANDLE_CHANGE_BYWHO) {
  return {...state, byWho: action.payload}
 }
 if(action.type === HANDLE_DATA) {
  return {...state, data: action.payload.user, selectedData: action.payload.user}
 }
 return {...state}
}

export default dataReducer