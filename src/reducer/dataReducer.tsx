import { actionType, initialStateInterface } from "../components/Data.types";
import { HANDLE_CHANGE_CITY, HANDLE_CHANGE_CHECKBOX, HANDLE_CHANGE_LANG, HANDLE_CHANGE_BYWHO, HANDLE_DATA, HANDLE_CHANGE} from "../utils/action";

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
if(action.type === HANDLE_CHANGE) {
    if (state.yuzyuze && state.cevrimici) {
        if(state.byWho.length === 0){
            return {...state, selectedData: state.data}
        }
        else {
            const newData = state.data.filter((e)=>e.title?.some((a)=>state.byWho.some((b)=> a === b)))
            return {...state, selectedData: newData}
        }
    }
    else if(state.cevrimici && !state.yuzyuze){
        if(state.city === 'Tüm Şehirler') {
            const newData = state.data.filter((e)=>e.cevrimici === state.cevrimici)
            if(state.byWho.length === 0){
                return {...state, selectedData: [...newData]}
            }
            else {
                const newData2 = newData.filter((e)=>e.title?.some((a)=>state.byWho.some((b)=> a === b)))
                return {...state, selectedData: newData2}
            }
        }
        else {
            const newData = state.data.filter((e)=>(e.cevrimici === state.cevrimici || e.sehir === state.city))
            if(state.byWho.length === 0){
                return {...state, selectedData: [...newData]}
            }
            else {
                const newData2 = newData.filter((e)=>e.title?.some((a)=>state.byWho.some((b)=> a === b)))
                return {...state, selectedData: newData2}
            }
        }
    }
    else if (state.yuzyuze && !state.cevrimici) {
        if(state.city === 'Tüm Şehirler') {
            const newData = state.data.filter((e)=>e.yuzyuze === state.yuzyuze)
            if(state.byWho.length === 0){
                return {...state, selectedData: [...newData]}
            }
            else {
                const newData2 = newData.filter((e)=>e.title?.some((a)=>state.byWho.some((b)=> a === b)))
                return {...state, selectedData: newData2}
            }
        }
        else {
            const newData = state.data.filter((e)=>(e.yuzyuze === state.yuzyuze && e.sehir === state.city))
            if(state.byWho.length === 0){
                return {...state, selectedData: [...newData]}
            }
            else {
                const newData2 = newData.filter((e)=>e.title?.some((a)=>state.byWho.some((b)=> a === b)))
                return {...state, selectedData: newData2}
            }
        }
    }
    else {
        if(state.city !== 'Tüm Şehirler') {
            const newData = state.data.filter((e)=>e.sehir === state.city)
            if(state.byWho.length === 0){
                return {...state, selectedData: [...newData]}
            }
            else {
                const newData2 = newData.filter((e)=>e.title?.some((a)=>state.byWho.some((b)=> a === b)))
                return {...state, selectedData: newData2}
            }
        }
        else {
            if(state.byWho.length === 0){
                return {...state, selectedData: [...state.data]}
            }
            else {
                const newData2 = state.data.filter((e)=>e.title?.some((a)=>state.byWho.some((b)=> a === b)))
                return {...state, selectedData: newData2}
            }
        }
    }
}
 return {...state}
}

export default dataReducer