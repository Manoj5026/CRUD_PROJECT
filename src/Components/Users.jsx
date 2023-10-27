import axios from "axios"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"


const Users = ()=>{
    let [content,setcontent]=useState([])
    

    useEffect(()=>{
        axios.get('http://localhost:3000/profile')
        .then((response)=>{setcontent(response.data)
        })
        .catch(()=>{console.log("errrrrr")})
    },[])

    let deleteprofile=(m)=>{
    axios.delete(`http://localhost:3000/profile/${m}`)
    window.location.assign('/users')
    }

    return(
        <div>
            {content.map((x)=>{
                return(
                    <table>
                        <tr>
                        <td>Name:</td>
                        <td>{x.name}</td>
                        </tr>
                        <tr>
                        <td>Email:</td>
                        <td>{x.email}</td>
                        </tr>
                        <tr>
                            <td><button><Link to={`/edit/${x.id}`}>Edit</Link></button></td>
                            <td><button onClick={()=>{deleteprofile(x.id)}}>Delete</button></td>
                        </tr>
                    </table>
                )
            })}
        </div>
    )
}
export default Users