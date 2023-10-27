import axios from "axios"
import { useEffect,useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditUser = ()=>{
    let nav=useNavigate()
    let obj = useParams()

    let [name,setname]=useState("")
    let [email,setemail]=useState("")

    let nameData=(e)=>{
        setname(e.target.value)
    }
    let emailData=(e)=>{
        setemail(e.target.value)
    }

    let formhandle =(e)=>{
        e.preventDefault()
        let payload ={
            name:name,
            email:email
        }
        nav('/users')
        axios.put(`http://localhost:3000/profile/${obj.abc}`,payload)
        .then(()=>{console.log("done")})
    }
    

    useEffect(()=>{
        axios.get(`http://localhost:3000/profile/${obj.abc}`)
        .then((response)=>{setname(response.data.name)
            setemail(response.data.email)
        })
        .catch(()=>{console.log("errrrrr")})
    },[obj.abc])


    return(
        <div>
            <form action="">
                <h1>Update Profile</h1>
                <label htmlFor="">Name</label>
                <input type="text"  value={name} onChange={nameData} required/>
                <label htmlFor="">Email</label>
                <input type="email"  value={email} onChange={emailData} required/>
                <button type="submit" onClick={formhandle}  >Submit</button>
            </form>
        </div>
    )
}
export default EditUser