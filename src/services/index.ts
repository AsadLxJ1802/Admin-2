import type { Dispatch, SetStateAction, SubmitEvent } from "react";
import { instance } from "../hooks";
import toast from "react-hot-toast";
import type { NavigateFunction } from "react-router-dom";
import { PATH } from "../components";


export const LoginFn = (setLoading:Dispatch<SetStateAction<boolean>>,evt:SubmitEvent<HTMLFormElement>,setToken:Dispatch<SetStateAction<string>>) => {
    setLoading(true)
    evt.preventDefault()
    const data ={
        email:evt.target.email.value,
        password:evt.target.password.value
    }
    instance.post("/auth/login" , data).then(res => {
        toast.success("Muffaqiyatli qoshildi")
        setTimeout(() => {
            setToken(res.data.access_token)
        },1500)
    }).catch(() => toast.error("Bunday Foydalanuvchi topilmadi")).finally(() => setLoading(false))
}


export const RegisterFn = (setLoading:Dispatch<SetStateAction<boolean>>,evt:SubmitEvent<HTMLFormElement>,navigate:NavigateFunction) => {
    evt.preventDefault()
    setLoading(true)
    const data ={
        email:evt.target.email.value,
        password:evt.target.password.value,
        name:`${evt.target.firstname.value} ${evt.target.lastname.value}`,
        role:"admin",
        avatar: "https://cdn.twocontinents.com/hfpqy_V7_B_IMG_Dubai_UAE_1200x800_e1936b3330.jpg"
    }
    instance.post("/users",data).then(res => {
        toast.success(`Muffaqiyatli ${res.data.name} qushildi`)
            setTimeout(() => {
            navigate(PATH.home)
        },1500)
    }).catch(() => toast.error("Xattolik bor")).finally(() => setLoading(false))
    
}



