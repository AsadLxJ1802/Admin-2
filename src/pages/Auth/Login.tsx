import { useContext, useState, type SubmitEvent } from "react"
import { Context } from "../../context/Context"
import toast, { Toaster } from "react-hot-toast"
import { AuthFormItem, Button, ChangeAuthPage, SiteLogo } from "../../components"
import axios from "axios"
import { LoadingWhite, LoginBg } from "../../assets/images"





const  Login = () => {
    const {setToken} = useContext(Context)
    const [loading ,setLoading] = useState<boolean>(false)


    function hendleLoginSubmit(evt:SubmitEvent<HTMLFormElement>) {
        setLoading(true)
        evt.preventDefault()
        const data = {
            email:evt.target.email.value,
            password:evt.target.password.value
        }
        axios.post("https://api.escuelajs.co/api/v1/auth/login" , data).then(res => {
            setTimeout(() => {
                setToken(res.data.access_token)
            },1500)
        }).catch(() => toast.error("Bunday foydalanuvchi topilmadi!") ).finally(() => setLoading(false))
    }






    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950  via-slate-900 to-indigo-950  text-slate-100  relative  bg-cover bg-center" style={{ backgroundImage: `url(${LoginBg})` }}>
            <Toaster position="top-right"  reverseOrder={false} toastOptions={{ style: {background: "#0f172a",color: "#fff",border: "1px solid #334155",padding: "16px",borderRadius: "12px"},success: {style: {background: "#065f46"}},error: {style: {background: "#7f1d1d"}}}}/>
            <div className="mx-auto flex min-h-screen max-w-full items-center justify-center px-4 absolute inset-0 bg-black/50 backdrop-blur">
                <div className="w-full max-w-md">
                {/* Header */}
                    <div className="mb-6 text-center">
                        <SiteLogo/>
                        <h1 className="text-2xl font-semibold tracking-tight">Welcome</h1>
                    </div>
                    {/* Card */}
                    <div className="rounded-3xl bg-blue-300/10 p-6 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur">
                        <form onSubmit={hendleLoginSubmit}>
                            <AuthFormItem label="Email" name="email" placeholder="example@gmail.com" type="email" />
                            <AuthFormItem labelClass="!mt-4" extraClass="mb-10" label="Password" name="password"  placeholder="********" type="password" />
                            <Button extraClass='  !mt-3  !bg-green-200 !flex !justify-center !item-center' type="submit">
                                    {loading ? <img className="scale-[1.2]" src={LoadingWhite}  alt="loading" width={20} height={20}/> : "Sign in"}
                            </Button>
                        </form>
                    </div>
                    <ChangeAuthPage title="Don't have an account?"/>
                </div>
            </div>
        </div>
    )
}




export default Login