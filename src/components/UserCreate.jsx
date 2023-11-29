import React, { useState, useContext } from 'react'
import UserContext from './userContext'
import { useHistory } from "react-router-dom"

function UserCreate() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")

    const data = useContext(UserContext)
    console.log(data)

    let history = useHistory();

    const handleSubmit = () => {
        console.log(name, email, mobile)
        const newUserData = {
            name,
            email,
            mobile
        }
        console.log(newUserData)
        //copy userData and pass newUserData
        data.setUserData([...data.userData, newUserData])
        console.log("Data => ", data.userData);
        history.push("/users");
    }

    return (
        <div className='container'>
            <h1>UserCreate</h1>

            <div className='row'>
                <div className='col-lg-12'>
                    <label>Name</label>
                    <input type="text" name="name" id="name" className='form-control'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='col-lg-12'>
                    <label>Email</label>
                    <input type="email" name="email" id="email" className='form-control'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='col-lg-12'>
                    <label>Mobile</label>
                    <input type="text" name="mobile" id="mobile" className='form-control'
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </div>
            </div>
            <div className='row' style={{ display: "flex", justifyContent: "center" }}>
                <div className='btn btn-primary'>
                    <input className='btn btn-primary' type="submit" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default UserCreate