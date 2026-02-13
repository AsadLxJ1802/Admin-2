import { Route, Routes } from "react-router-dom"
import { PATH } from "../components"
import { Categoriy, Home, NotFound, Products } from "../pages"
import { Header, SiteBar } from "../modules"



const DashboardRoute = () => {
    const dashboardList = [
        {id:1 , path:PATH.home , element:<Home/>},
        {id:1 , path:PATH.products , element:<Products/>},
        {id:1 , path:PATH.category , element:<Categoriy/>},
        {id:1 , path:PATH.notFound , element:<NotFound/>},
    ]
    return(
        <div className="flex">
            <SiteBar/>
            <div className="w-[78%] h-screen overflow-y-auto">
                <Header/>
                <Routes>{dashboardList.map(item => <Route key={item.id} path={item.path} element={item.element} />)}</Routes>
            </div>
        </div>
    )
}
export default DashboardRoute