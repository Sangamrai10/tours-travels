import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import logo1 from '../img/logo1.png'

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-1">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <a className="navbar-brand" href="#">
                        <img src={logo1} alt="" />
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold active mx-2" aria-current="page" to="/">Home</Link>
                            </li>

                            {/* Pages  */}
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold" aria-current="page" to="/about">
                                    Pages
                                </Link>
                                <ul className='dropdown'>
                                    <li><Link className='d-flex' to="/about">About Us</Link></li>
                                    <li><a className='d-flex' href="">Our Team</a></li>
                                    <li><a className='d-flex' href="">Contact Us</a></li>
                                    <li><a className='d-flex' href="">FAQ page </a></li>
                                    <li><a className='d-flex' href="">Coming Soon</a></li>
                                    <li><a className='d-flex' href="">404 Error Page</a></li>
                                </ul>
                            </li>

                            {/* Destenation  */}
                            <li className="nav-item">
                                <a className="nav-link fw-semibold" aria-current="page" href="#">
                                    Destination
                                </a>
                                <ul className='dropdown'>
                                    <li><a className='d-flex' href="">Destination List</a></li>
                                    <li><a className='d-flex' href="">Destination Items</a></li>
                                </ul>
                            </li>

                            {/* Tours  */}
                            <li className="nav-item">
                                <a className="nav-link fw-semibold" aria-current="page" href="#">
                                    Tours
                                </a>
                                <ul className='dropdown'>
                                    <li><a className='d-flex' href="">Tour Lists <i class="fa-solid fa-chevron-right ms-auto"></i></a></li>
                                    <li><a className='d-flex' href="">Single Type <i class="fa-solid fa-chevron-right ms-auto"></i></a></li>
                                    <li><a className='d-flex' href="">User Dashboard <i class="fa-solid fa-chevron-right ms-auto"></i></a></li>
                                </ul>
                            </li>

                            {/* Blog  */}
                            <li className="nav-item">
                                <a className="nav-link fw-semibold" aria-current="page" href="#">
                                    Blog
                                </a>
                                <ul className='dropdown'>
                                    <li><a className='d-flex' href="">Right Sidebar</a></li>
                                    <li><a className='d-flex' href="">Left Sidebar</a></li>
                                    <li><a className='d-flex' href="">No Sidebar</a></li>
                                    <li><a className='d-flex' href="">Post Types <i class="fa-solid fa-chevron-right ms-auto"></i></a></li>
                                </ul>
                            </li>

                            {/* Shop  */}
                            <li className="nav-item">
                                <a className="nav-link fw-semibold" aria-current="page" href="#">
                                    Shop
                                </a>
                                <ul className='dropdown'>
                                    <li><a className='d-flex' href="">Product List</a></li>
                                    <li><a className='d-flex' href="">Single Product</a></li>
                                    <li><a className='d-flex' href="">Shop Layouts <i class="fa-solid fa-chevron-right ms-auto"></i></a></li>
                                    <li><a className='d-flex' href="">Shop Pages <i class="fa-solid fa-chevron-right ms-auto"></i></a></li>
                                </ul>
                            </li>

                            {/* Elements  */}
                            <li className="nav-item">
                                <a className="nav-link fw-semibold" aria-current="page" href="#">
                                    Elements
                                </a>
                                <ul className='dropdown'>
                                        <li><a className='d-flex' href="">Featured <i class="fa-solid fa-chevron-right ms-auto"></i></a></li>
                                        <li><a className='d-flex' href="">Classic <i class="fa-solid fa-chevron-right ms-auto"></i></a></li>
                                        <li><a className='d-flex' href="">Infographic <i class="fa-solid fa-chevron-right ms-auto"></i></a></li>
                                        <li><a className='d-flex' href="">Typography <i class="fa-solid fa-chevron-right ms-auto"></i></a></li>
                                    </ul>
                            </li>
                        </ul>
                    </div>

                    {/* Icon section  */}
                    <div className='srcIcon'>
                        <a className='p-2 srcIc' href="">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                        <a className='p-2 user' href="">
                            <i class="fa-solid fa-user"></i>
                        </a>
                    </div>

                </div>
            </nav>


            {/* router  */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}
