import React from 'react'
import Table from "./Table"
import { Link } from "react-router-dom"

function Users() {


    return (
        <div>
            <Link to="/user-create" className="btn btn-primary">Create User</Link>
            <Table />
        </div>
    )
}

export default Users