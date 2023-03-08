export interface initialStateInterface {
 data: data[]
 selectedData: selectedData[]
 cevrimici: boolean
 yuzyuze: boolean
 city: string
 lang: string
 byWho: Array<string>
}
export type data = {
 name: string,
 unvan: string,
 email: string,
 telefon: string,
 cevrimici: boolean,
 yuzyuze: boolean,
 sehir: string,
 form: string,
 instagram: string,
 bilgi: string,
 doluluk: number,
 status: number
}
export type selectedData = {
 name: string,
 unvan: string,
 email: string,
 telefon: string,
 cevrimici: boolean,
 yuzyuze: boolean,
 sehir: string,
 form: string,
 instagram: string,
 bilgi: string,
 doluluk: number,
 status: number
}
export const initialState: initialStateInterface = {
 data: [],
 selectedData: [],
 cevrimici: false,
 yuzyuze: false,
 city: "",
 lang: "Türkçe",
 byWho: [],
}
export type DataContextProviderProps = {
 children: React.ReactNode
}
export type actionType = {
 type: string
 payload: any
}
export type cityLang = {
 value: number, label: string
}