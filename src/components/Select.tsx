import type { ChangeEvent, FC } from "react"
import type { CategoryaType } from "../@types"

interface SelectType{
    list:Array<CategoryaType>,
    extraClass?: string,
    onChange?:(e:ChangeEvent<HTMLSelectElement>) => void
    
}

const Select:FC<SelectType> = ({extraClass, onChange ,list}) => {
  return (
    <select  onChange={onChange} className={`${extraClass} w-full rounded-2xl bg-slate-950/40 py-3 px-4 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 outline-none transition focus:ring-2 focus:ring-indigo-400/60`}>
        {list.map(item => <option  key={item.id} value={item.id}>{item.name}</option>)}
    </select>
  )
}

export default Select