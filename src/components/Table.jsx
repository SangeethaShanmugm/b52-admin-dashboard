import React, { useContext } from 'react'
import UserContext from './userContext'

function Table() {
    // const data = [
    //     {
    //         name: "Tiger Nixon",
    //         position: "System Architect",
    //         office: "Edinburgh",
    //         age: "61",
    //         startDate: "2011/04/25",
    //         salary: "$320,800"
    //     },
    //     {
    //         name: "Garrett Winters",
    //         position: "Accountant",
    //         office: "Tokyo",
    //         age: "61",
    //         startDate: "2011/04/25",
    //         salary: "$120,800"
    //     }
    //     ,
    //     {
    //         name: "Ashton Cox",
    //         position: "Junior Technical Author",
    //         office: "San Francisco",
    //         age: "61",
    //         startDate: "2011/04/25",
    //         salary: "$320,800"
    //     }
    //     ,
    //     {
    //         name: "Cedric Kelly",
    //         position: "Senior Javascript Developer",
    //         office: "Edinburgh",
    //         age: "61",
    //         startDate: "2011/04/25",
    //         salary: "$320,800"
    //     },
    //     {
    //         name: "Airi Satou",
    //         position: "Accountant",
    //         office: "Edinburgh",
    //         age: "61",
    //         startDate: "2011/04/25",
    //         salary: "$320,800"
    //     }
    // ]

    // console.log(data)

    const data = useContext(UserContext)
    console.log(data)

    // console.log("Table", data.name)
    return (
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.userData.map((user) => {
                                return (
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile}</td>

                                    </tr>
                                )
                            })}

                        </tbody>

                        {/* {data.map((item) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>

                                    </tr>
                                </tbody>
                            )
                        })} */}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table