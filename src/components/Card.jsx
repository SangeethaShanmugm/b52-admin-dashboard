import React from 'react'

function Card() {
    const data = [
        {
            text: "Earnings (Monthly)",
            content: "$40,000",
            color: "primary",
            icon: "fas fa-calendar"
        },
        {
            text: " Earnings (Annual)",
            content: "$215,000",
            color: "success",
            icon: "fas fa-dollar-sign",
        }
        ,
        {
            text: "Tasks",
            content: "50%",
            color: "info",
            icon: "fas fa-clipboard-list",
        },
        {
            text: "Pending Requests",
            content: "18",
            color: "warning",
            icon: "fas fa-comments",
        }
    ]

    return (
        <div>
            <div class="row">
                {data.map((item, index) => {
                    return (
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class={`card border-left-${item.color} shadow h-100 py-2`}>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-{item.color} text-uppercase mb-1">
                                                {item.text}</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{item.content}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class={`${item.icon} fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}



            </div>

        </div>
    )
}

export default Card