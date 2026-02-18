import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { ProductsType } from "../../../@types"
import { instance } from "../../../hooks"
import toast from "react-hot-toast"
import { Button, Modal } from "../../../components"
import { LoadingWhite } from "../../../assets/images"
import { SquarePen, Trash2 } from "lucide-react"

const ProductMore = () => {
  const  {id} = useParams()
  const navigate = useNavigate()
  const [loading , setLoading] = useState<boolean>(false)
  const [product , setProduct] = useState<ProductsType>()
  const [delModal , setDelModal] = useState<boolean>(false)

  function deleteProducts() {
    setLoading(true)
    instance.delete(`/products/${id}`).then(() => {
      setDelModal(false)
      toast.success("Maxsulot o'chirildi")
      setTimeout(() => navigate(-1) , 1000)
    }).catch(() => toast.error("Xattolik bor uchmadi")).finally(() => setDelModal(false))
  }

  useEffect(() => {
    instance.get(`products${id}`).then(res => setProduct(res.data))
  },[])

    return (
      <>
      <div className="min-h-screen bg-[#070A1A] text-white">
        <div className="sticky top-0 z-20 border-b border-white/10 bg-linear-to-r from-[#0B1230] via-[#0A0F2B]  to-[#140C2E]">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold tracking-tight line-clamp-1">{product?.title}</h1>
            <div className="flex items-center gap-3">
                <Button onClick={() => setDelModal(true)} extraClass="bg-linear-to-r cursor-pointer !from-red-500 to-violet-500" type="button"><Trash2/></Button>
                <Button onClick={() => navigate("update")} extraClass="flex items-center gap-4 cursor-pointer ! to-bg-red-500" type="button"><SquarePen />Tahrirlash</Button>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 overflow-hidden"> 
                    <div className="relative aspect-16/11 bg-white/5">
                        <img src={product?.images[0]} alt="" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/0 to-black/0" />
                        <div className="absolute bottom-4 left-4  right-4 flex items-end justify-between gap-3" />
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-black/40 px-3 py-1 text-xs ring-1 ring-white/10">
                              ID:{product?.id}
                            </span>
                            <span className="rounded-full bg-black/40 px-3 py-1 text-xs ring-1 ring-white/10">
                              ${product?.price}
                            </span>
                            <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs ring-1 ring-violet-400/25">
                              {product?.category?.name}
                            </span>
                        </div>
                    </div>
                </div>
              </div>
              <div className="mt-6 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
                  <div className="flex items-start justify-between gap-4">
                      <div>
                          <p className="text-xs text-white/60">Title</p>
                          <h2 className="mt-1 text-xl font-semibold leading-snug">
                              {product?.title}
                          </h2>
                      </div>
                      <span className="rounded-2xl bg-slate-950/40 px-3 py-2 text-xs right-1 ring-white/10">
                          {product?.slug}
                      </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    {product?.description}
                  </p>
              </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-slate-950/40 ring-1 ring-white/10 p-5" >
                  <p className="text-[11px]  uppercase tracking-wider text-white/50">
                      Price
                  </p>
                  <p className=" mt-2 text-2xl font-semibold">${product?.price}</p>
                  <p className="mt-1 text-xs  text-white/50">Current listing</p>
              </div>
              <div className="rounded-3xl bg-violet-500/10 ring-1 ring-violet-400/20 p-5">
                <p className="text-[11px] uppercase tracking-wider text-violet-100/70">
                  Category
                </p>
                <p className="mt-2 text-lg font-semibold">{product?.category?.name}</p>
                <p className="mt-1  text-xs text-violet-100/70">
                  {product?.category?.slug}
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
              <div className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/60">Category details</p>
                  <p className="mt-1 font-semibold">{product?.category?.name}</p>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10">
                  ID: {product?.category?.id}
                </span>
              </div>
              <div className="px-5 pb-5">
                <div className="aspect-video rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10" >
                    <img className="h-full w-full object-cover" src={product?.category?.image || "https://placeholder.cd/900x600"} alt="" />
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="text-sm font-semibold">Meta</p>
              <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
                    <p className="text-[11px] uppercase tracking-wider text-white/50">
                      Created
                    </p>
                    <p className="mt-1 text-sm text-shadow-white/85 ">{product?.creationAt}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
                    <p className="text-[11px] uppercase tracking-wider text-white/50">
                      Updated
                    </p>
                    <p className="mt-1 text-sm text-shadow-white/85 ">{product?.updatedAt}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal  open={delModal} onClose={() => setDelModal(false)}>
        <h1 className=" text-[22px] font-bold">O'chirmoqchimisiz?</h1>
        <div className="flex mt-5 gap-7.5 items-center justify-between">
          <Button onClick={() => setDelModal(false)} extraClass="hover:!from-blue-400 duration-300 hover!to-blue-600" type="button">Bekor Qilish</Button>
          <Button onClick={() => deleteProducts()} extraClass="hover:!from-red-400 flex items-center justify-center !h-[44px] duration-300 hover!to-red-600" type="button">
            {loading ? <img className="scale-[1.2] " src={LoadingWhite} alt="Loading" width={30} height={30} /> : "Tasdiqlash" }
          </Button>

        </div>
      </Modal>
      </>
    )
  }
  
  export default ProductMore