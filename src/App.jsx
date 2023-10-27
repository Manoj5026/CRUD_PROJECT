import CreateUser from "./Components/CreateUser"
import Users from "./Components/Users"
import Home from "./Components/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = ()=>{
    return(
        <div>
            <BrowserRouter>
            <Home></Home>
            <Routes>
                <Route element={<CreateUser/>} path="/"></Route>
                <Route element={<Users/>} path="/users"></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App