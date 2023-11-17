import React from 'react'
import { Link } from "react-router-dom"
function Sidebar() {
    return (
        <div>

            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>


                <hr class="sidebar-divider my-0" />


                <li class="nav-item active">
                    <Link class="nav-link" to="/"><i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>

                </li>


                <hr class="sidebar-divider" />




                <li class="nav-item">
                    <Link class="nav-link" to="/users"><i class="fas fa-fw fa-cog"></i>
                        <span>Users</span></Link>



                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Custom Components:</h6>
                            <a class="collapse-item" href="buttons.html">Buttons</a>
                            <a class="collapse-item" href="cards.html">Cards</a>
                        </div>
                    </div>
                </li>




            </ul >
        </div >
    )
}

export default Sidebar