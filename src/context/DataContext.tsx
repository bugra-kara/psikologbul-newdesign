import React, { useContext, useReducer, createContext, SyntheticEvent, PropsWithChildren } from 'react'
import dataReducer from '../reducer/dataReducer'
import { actionType, initialState, initialStateInterface, cityLang, data } from '../components/Data.types'
import { HANDLE_CHANGE, HANDLE_CHANGE_BYWHO, HANDLE_CHANGE_CHECKBOX, HANDLE_CHANGE_CITY, HANDLE_CHANGE_LANG, HANDLE_DATA } from '../utils/action'
const DataContext = createContext<{
  state: initialStateInterface;
  dispatch: (e: actionType) => void;
  handleChangeCheckbox: ((event: React.SyntheticEvent<Element, Event>, checked: boolean) => void) | undefined;
  handleChangeCity: (any);
  handleChangeLang: (any);
  handleChangeByWho: (any);
  handleData: (any);
  }>({
  state: initialState,
  dispatch: ()=> {},
  handleChangeCheckbox: ()=> {},
  handleChangeCity: ()=> {},
  handleChangeLang: ()=> {},
  handleChangeByWho: ()=> {},
  handleData: ()=> {}
});

export const DataProvider: React.FC<PropsWithChildren> = ({children}: any) => {
  const [state, dispatch] = useReducer(dataReducer, initialState)

  const handleChangeCheckbox = (e: SyntheticEvent<Element, Event>, checked: boolean): void => {
    dispatch({type: HANDLE_CHANGE_CHECKBOX, payload: {target: e.target, checked}})
    dispatch({type: HANDLE_CHANGE, payload: ""})
  }
  const handleChangeCity = (e: cityLang) => {
    dispatch({type: HANDLE_CHANGE_CITY, payload: e})
    dispatch({type: HANDLE_CHANGE, payload: ""})
  }
  const handleChangeLang = (e: cityLang) => {
    dispatch({type: HANDLE_CHANGE_LANG, payload: e})
    dispatch({type: HANDLE_CHANGE, payload: ""})
  }
  const handleChangeByWho = (e: []) => {
    dispatch({type: HANDLE_CHANGE_BYWHO, payload: e})
    dispatch({type: HANDLE_CHANGE, payload: ""})
  }
  const handleData = (data: data) => {
    dispatch({type: HANDLE_DATA, payload: data})
  }
  return (
    <DataContext.Provider value={{ state, dispatch, handleChangeCheckbox, handleChangeCity, handleChangeLang, handleChangeByWho, handleData }}>{children}</DataContext.Provider>
  )
}

// make sure use
export const useDataContext = () => {
  return useContext(DataContext)
}