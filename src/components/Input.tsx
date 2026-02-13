import type { FC } from "react"

interface InputType{
    name:string,
    type:"password" | "text" | "email",
    placeholder:string,
    extraClass?:string,

}


const Input:FC<InputType> = ({name , type , placeholder ,extraClass}) => {
  return (
    <input  name={name} type={type} placeholder={placeholder} className={`${extraClass} w-full rounded-2xl bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 outline-none transition focus:ring-2 focus:ring-indigo-400/60`}/>
  )
}

export default Input