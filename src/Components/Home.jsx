import { Link } from "react-router-dom"

const Home = ()=>{
    return(
        <div>
            <Link to={"/"}>CREATE USER</Link> |
            <Link to={"/users"}>USERS</Link>
            
        </div>
    )
}
export default Home