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
 id: number,
 name: string,
 cinsiyet: string | null,
 unvan: string | null,
 email: string | null,
 telefon: string | null,
 cevrimici: boolean,
 yuzyuze: boolean,
 sehir: string | null,
 form: string | null,
 instagram: string | null,
 bilgi: string | null,
 doluluk: number,
 title: Array<string> | null,
 lang: string | null,
 location: string | null,
 website: string | null
}
export type selectedData = {
 id: number
 name: string,
 cinsiyet: string | null,
 unvan: string | null,
 email: string | null,
 telefon: string | null,
 cevrimici: boolean,
 yuzyuze: boolean,
 sehir: string | null,
 form: string | null,
 instagram: string | null,
 bilgi: string | null,
 doluluk: number,
 title: Array<string> | null,
 lang: string | null,
 location: string | null,
 website: string | null
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
export interface DataContextProviderProps {
 children: React.ReactNode | JSX.Element | JSX.Element[];
}
export type actionType = {
 type: string
 payload: any
}
export type cityLang = {
 value: number, label: string
}