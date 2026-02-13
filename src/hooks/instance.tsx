import axios from "axios"


const URL = import.meta.env.VITE_API
console.log(import.meta.env.VITE_API)
export const instance = axios.create({baseURL: URL})

export default instance