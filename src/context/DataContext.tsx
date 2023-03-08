import React, { useContext, useReducer, createContext, SyntheticEvent } from 'react'
import dataReducer from '../reducer/dataReducer'
import { DataContextProviderProps, actionType, initialState, initialStateInterface, cityLang } from '../components/Data.types'
import { HANDLE_CHANGE_BYWHO, HANDLE_CHANGE_CHECKBOX, HANDLE_CHANGE_CITY, HANDLE_CHANGE_LANG } from '../utils/action'
const DataContext = createContext<{
  state: initialStateInterface;
  dispatch: (e: actionType) => void;
  handleChangeCheckbox: ((event: React.SyntheticEvent<Element, Event>, checked: boolean) => void) | undefined;
  handleChangeCity: (any);
  handleChangeLang: (any);
  handleChangeByWho: (any);
  }>({
  state: initialState,
  dispatch: ()=> {},
  handleChangeCheckbox: ()=> {},
  handleChangeCity: ()=> {},
  handleChangeLang: ()=> {},
  handleChangeByWho: ()=> {}
});

export const DataProvider: React.FC<DataContextProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(dataReducer, initialState)

  const handleChangeCheckbox = (e: SyntheticEvent<Element, Event>, checked: boolean): void => {
    dispatch({type: HANDLE_CHANGE_CHECKBOX, payload: {target: e.target, checked}})
  }
  const handleChangeCity = (e: cityLang) => {
    dispatch({type: HANDLE_CHANGE_CITY, payload: e})
  }
  const handleChangeLang = (e: cityLang) => {
    dispatch({type: HANDLE_CHANGE_LANG, payload: e})
  }
  const handleChangeByWho = (e: []) => {
    dispatch({type: HANDLE_CHANGE_BYWHO, payload: e})
  }
  return (
    <DataContext.Provider value={{ state, dispatch, handleChangeCheckbox, handleChangeCity, handleChangeLang, handleChangeByWho }}>{children}</DataContext.Provider>
  )
}

// make sure use
export const useDataContext = () => {
  return useContext(DataContext)
}