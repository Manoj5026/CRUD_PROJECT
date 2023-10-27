import { useState } from "react"
import axios from "axios"

const CreateUser = ()=>{
    let [name,setname]=useState("")
    let [email,setemail]=useState("")

    let nameData=(e)=>{
        setname(e.target.value)
    }
    let emailData=(e)=>{
        setemail(e.target.value)
    }

    let formhandle=(e)=>{
        e.preventDefault()
        let payload ={
            name:name,
            email:email
        }
        axios.post(' http://localhost:3000/profile',payload)
        .then(()=>{console.log(name,email)})
        .catch(()=>{console.log("errrrrr")})
    }

    return(
        <div>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text"  value={name} onChange={nameData} required/>
                <label htmlFor="">Email</label>
                <input type="email"  value={email} onChange={emailData} required/>
                <button type="submit" onClick={formhandle}>Submit</button>
            </form>
        </div>
    )
}
export default CreateUser