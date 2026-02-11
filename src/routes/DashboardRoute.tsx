import { Route, Routes } from "react-router-dom"
import { PATH } from "../components"
import { Categoriy, Home, NotFound, Products } from "../pages"



const DashboardRoute = () => {
    const dashboardList = [
        {id:1 , path:PATH.home , element:<Home/>},
        {id:1 , path:PATH.products , element:<Products/>},
        {id:1 , path:PATH.category , element:<Categoriy/>},
        {id:1 , path:PATH.notFound , element:<NotFound/>},
    ]
    return(
        <Routes>{dashboardList.map(item => <Route key={item.id} path={item.path} element={item.element} />)}</Routes>
    )
}
export default DashboardRoute