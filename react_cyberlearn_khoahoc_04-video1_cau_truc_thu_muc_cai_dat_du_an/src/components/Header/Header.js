import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
                    <NavLink className="navbar-brand" to="/">Cyber</NavLink>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink
                                exact
                                activeClassName='activeMenuItem'
                                activeStyle={{color:'red'}}
                                className="nav-link" to="/home">Home </NavLink>
                            </li>
                            <li className="nav-item">
                                
                                <NavLink 
                                 exact
                                 activeClassName='activeMenuItem'
                                className="nav-link" to="/about">Link</NavLink>
                            </li>
                            <li className="nav-item">
                                
                                <NavLink 
                                 exact
                                 activeClassName='activeMenuItem'
                                className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                
                                <NavLink 
                                 exact
                                 activeClassName='activeMenuItem'
                                className="nav-link" to="/profile">Profile</NavLink>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>

        )
    }
}
