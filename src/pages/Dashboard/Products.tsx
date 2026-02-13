import { useContext, useEffect, useState } from "react"
import { Context } from "../../context/Context"
import type { CategoryaType, ProductsType } from "../../@types"
import { instance } from "../../hooks"
import { Button, Input } from "../../components"
import Select from "../../components/Select"

const Products =() => {
  const {token} = useContext(Context)
  const [categoryList , setCategoriyalis ] = useState<CategoryaType[]>([])
  const [products , setProducts] =useState<ProductsType[]>([])


  useEffect(() => {
    instance.get("/categories" , {headers:{"Authorization": `Bearer ${token}`}
    }).then(res => setCategoriyalis(res.data))
  },[])

  useEffect(() => {
    instance.get("/products").then(res => setProducts(res.data))
  },[])
  
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

function hendleSelct(id: number) {
  setSelectedCategory(id)
}

const filteredProducts = selectedCategory
  ? products.filter(item => item.category.id === selectedCategory)
  : products


return(
  
  <div className="p-5">
    <div className="flex items-center gap-7.5 mb-7"> 
        <Input  extraClass="!py-3.5 !text-black !w-[300px] " name="search" placeholder="Qidirsh" type="text"/>
        <Select   list={categoryList} onChange={(e) => hendleSelct(Number(e.target.value))} extraClass=" !py-3.5 !text-slate-500 !w-[300px]"/>
    </div>

      <ul className="grid grid-cols-4 gap-7  ">
        {filteredProducts.map(item => (
          <li key={item.id} className=" bg-linear-to-br from-slate-900 via-slate-800 to-indigo-950 border rounded-2xl  hover:scale-[1.1] shadow-[0_0_20px_2px_#000] hover:shadow-lg transition duration-300 bg-white">
              <img className="w-full h-60 rounded-t-2xl" src={item.images[0]} alt={item.title} width={200} />
              <div className="p-3">
                <h2 className="font-semibold text-lg text-white mb-2 ">{item.title}</h2>
                <p className="text-gray-500 mb-5">Price : {item.price}$</p>

                <div className="flex items-center justify-end gap-3">
                  <Button type="button" extraClass="!bg-indigo-950 !w-auto"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/></svg></Button>
                  <Button type="button"extraClass=" !bg-indigo-950 !w-auto "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/> <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg></Button>
                  <Button type="button" extraClass=" !bg-indigo-950 !w-auto"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/> </svg></Button>
                </div>
              </div>
          </li>
        ))}
      </ul>
  </div>
)
  
}

export default Products
