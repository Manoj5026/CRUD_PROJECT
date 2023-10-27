import axios from "axios"
import { useEffect,useState } from "react"


const Users = ()=>{
    let [content,setcontent]=useState([])
    

    useEffect(()=>{
        axios.get('http://localhost:3000/profile')
        .then((response)=>{setcontent(response.data)
        })
        .catch(()=>{console.log("errrrrr")})
    },[])

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
                    </table>
                )
            })}
        </div>
    )
}
export default Users