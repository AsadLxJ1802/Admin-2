import axios from "axios"
import { useState, type SubmitEvent } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { AuthFormItem, Button, ChangeAuthPage, PATH, SiteLogo } from "../../components"
import { LoadingWhite, LoginBg } from "../../assets/images"




const Register  =() => {
    const navigate = useNavigate()
    const [loading ,setLoading] = useState<boolean>(false)

    function hendleRegisterDubmit(evt:SubmitEvent<HTMLFormElement>) {
        setLoading(true)
        evt.preventDefault()
        if (evt.target.email.value == "" && evt.target.password.value == "" ) {
            toast.error("Email yoki Password Kititmadingiz")
        } 
            
        
        const data = {
            email:evt.target.email.value,
            password:evt.target.password.value,
            name:`${evt.target.firstname.value} ${evt.target.lastname.value}`,
            role:"admin",
            avatar: "https://cdn.twocontinents.com/hfpqy_V7_B_IMG_Dubai_UAE_1200x800_e1936b3330.jpg"
        }
        axios.post("https://api.escuelajs.co/api/v1/users",data).then(res => {
            toast.success(`Muffaqiyatki ${res.data.name} qo'shildi` )
            setTimeout(() => {
                navigate(PATH.home)
            },1500)
        }).catch(() => toast.error("Xattolik bor")).finally(() => setLoading(false))
    }
    return(
        <div className="min-h-screen bg-linear-to-br from-slate-950  via-slate-900 to-indigo-950  text-slate-100 relative  bg-cover bg-center" style={{ backgroundImage: `url(${LoginBg})` }} >
            <Toaster position="top-right"  reverseOrder={false} toastOptions={{ style: {background: "#0f172a",color: "#fff",border: "1px solid #334155",padding: "16px",borderRadius: "12px"},success: {style: {background: "#065f46"}},error: {style: {background: "#7f1d1d"}}}}/>
            <div className="mx-auto flex min-h-screen max-w-full items-center justify-center px-4 absolute inset-0 bg-black/50 backdrop-blur">
                <div className="w-full max-w-md">
                {/* Header */}
                    <div className="mb-6 text-center">
                        <SiteLogo/>
                        <h1 className="text-2xl font-semibold tracking-tight">Registration</h1>
                    </div>
                    {/* Card */}
                    <div className="rounded-3xl bg-blue-300/10 p-6 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur">
                        <form onSubmit={hendleRegisterDubmit} >
                            <AuthFormItem label="Name" name="firstname"  placeholder="Name....." type="text" />
                            <AuthFormItem labelClass="!mt-4" label="Lastname" name="lastname"  placeholder="Lastname....." type="text" />
                            <AuthFormItem labelClass="!mt-4" label="Email" name="email" placeholder="example@gmail.com" type="email" />
                            <AuthFormItem labelClass="!mt-4" extraClass="mb-10" label="Password" name="password"  placeholder="********" type="password" />
                            <Button extraClass="    !bg-green-200 !flex !justify-center " type="submit">
                                    {loading ? <img className="scale-[1.2]" src={LoadingWhite}  alt="loading" width={20} height={20}/> : "Create Account"}
                            </Button>
                        </form>
                    </div>
                    <ChangeAuthPage title="To the system "/>
                </div>
            </div>
        </div>
    )
}

export default Register