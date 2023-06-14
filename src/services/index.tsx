import axios from "axios"

export const dataLoader = async () => {
 try {
  const response = await axios.get('https://api.psikologbul.io/content/contents')
  return {user: response.data.data}
 } catch (error) {
  return error
 }
}