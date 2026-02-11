import type { FC } from "react"
import { Link } from "react-router-dom"
import PATH from "./Path"



interface ChangeAuthPageType {
    title:"To the system " | "Don't have an account?"
}

const ChangeAuthPage:FC<ChangeAuthPageType> =({title}) =>{
    return (
        <p className="mt-5 space-x-1 text-center text-sm text-slate-300">
            <span>{title}</span>
            <Link to={title == "To the system " ? PATH.home : PATH.register} className="font-medium border border-transparent hover:border-b hover:border-b-indigo-300 inline-block duration-300 text-indigo-300 hover:text-indigo-200">{title == "To the system " ? "Enter" : "Sign up"}</Link>
        </p>
    )
}

export default ChangeAuthPage