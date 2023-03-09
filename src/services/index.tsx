import { supabase } from './supabaseClient'
export const dataLoader = async () => {
 try {
  const userInfos = await supabase.from('user_info')
  .select(
   `
   id,
   name,
   cinsiyet,
   unvan,
   email,
   telefon,
   cevrimici,
   yuzyuze,
   sehir,
   form,
   instagram,
   bilgi,
   doluluk,
   title,
   lang,
   location,
   website
   `
   )
  .order('id', {ascending: true})
  return {user: userInfos.data}
 } catch (error) {
  return error
 }
}