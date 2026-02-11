import { useContext } from "react"
import { Context } from "./context/Context"
import { AutehRoute, DashboardRoute } from "./routes"

const App = () => {
  const {token} = useContext(Context)
  return token ? <DashboardRoute/> : <AutehRoute/>
} 

export default App
