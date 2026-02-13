import { useContext, useState } from "react"
import { Context } from "../context/Context"
import { useLocation, useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import { Button, Modal, PATH } from "../components"
import { LoadingWhite } from "../assets/images"


const Header = () => {
    const {setToken} = useContext(Context)
    const [loading ,setLoading] = useState<boolean>(false)
    const location = useLocation()
    const navigate = useNavigate()
    const [logOutModal , setLogOutModal] = useState<boolean>(false)

    function LogOut() {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setLogOutModal(false)
            toast.success("Muffaqiyatki chiqib ketingiz")
        },1200)
        setTimeout(() => setToken(""),1800)
    }
    return(
        <header className="bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 border-b bg-white/80">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                <div className="flex items-center  gap-4">
                    <Button type="button" onClick={() => navigate(-1)} extraClass="!w-[40] !flex !items-center !justify-center !rounded-[10px] !h-[40px]">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6"/>
                        </svg>
                    </Button>
                    <p className="text-sm text-white text-[20px] font-semibold">
                        {location.pathname == PATH.home && "Home"}
                        {location.pathname == PATH.products && "Products"}
                        {location.pathname == PATH.category && "Category"}
                    </p>
                </div>
                <Button type="button" onClick={() => setLogOutModal(true)} extraClass="!w-[100px]">Log out</Button>
            </div>
            <Modal open={logOutModal} onClose={() => setLogOutModal(false)}>
                <h1 className="font-bold text-[22px]">chiqib ketish</h1>
                <div className="flex mt-5 gap-7.5 items-center justify-between">
                    <Button type="button" onClick={() => setLogOutModal(false)} extraClass="hover:!from-blue-400 duration-300 hover:!to-blue-600">Bekor qilish</Button>
                    <Button type="button" onClick={() => LogOut()} extraClass="hover:!from-red-400 !flex !items-center !justify-center duration-300 hover:!to-red-600">
                        {loading ? <img className="scale-[1.2]" src={LoadingWhite}  alt="loading" width={20} height={20}/> : "Sign in"}
                    </Button>
                </div>
            </Modal>
        </header>
    )
}

export default Header