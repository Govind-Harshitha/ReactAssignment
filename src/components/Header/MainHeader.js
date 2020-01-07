import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa'
import { Form, FormControl, Dropdown } from 'react-bootstrap';
import './MainHeader.css';
class MainHeader extends Component {
    render() {
        const category = this.props.categories;

        return (
            <nav>

                <div className="main-header">
                    <div className="logo">
                        <Link to="/">
                            <img
                                src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
                                alt="Udemy"
                                style={{ height: 85, width: 110 }}
                            />
                        </Link>
                    </div>
                    <div className="header-left">
                        <div className="inner-content-style">

                            {/* <span >Categories</span> */}
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-basic">
                                    <span class="cateogories-font">  <FontAwesome.FaTh /></span>
                                    Categories
                            </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  
                                        {
                                            category.map((category, i) =>                                                   
                                                    <Dropdown.Item href="#/action-1"><FontAwesome.FaServer />&nbsp;{category.category}
                                                    </Dropdown.Item>
                                              
                                                
                                            )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="navbar-search">
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="search" />
                                <button type="button" class="button-css search-button"><FontAwesome.FaSearch /></button>
                            </Form>
                        </div>
                    </div>
                    <div className="header-right" >
                        <div className="navbar-content">
                            <Link to="/" className="inner-content-style">
                                Udemy for Business
                        </Link></div>
                        <div class="navbar-content">
                            <Link className="inner-content-style">Teach on Udemy </Link>
                        </div>
                        <div class="hr-css navbar-content">
                            <Link className="inner-content-style">My Courses </Link>
                        </div>

                        <div className="navbar-icon">
                            <FontAwesome.FaHeartO className="icon-size" />
                          
                            </div>
                        <div className="navbar-icon">
                            <FontAwesome.FaShoppingCart className="icon-size" />
                        </div>
                        <div className="navbar-icon">
                            <FontAwesome.FaBell className="icon-size" />
                            
                        </div>
                        {/* <div className="login-text">
                            <button type="button" class="button-css login-button">Log In</button>
                        </div>
                        <div className="signup-text">
                            <button type="button" class="button-css signup-button">Sign Up</button>
                        </div> */}
                    </div>

                </div>

            </nav>
        );
    }
};

export default MainHeader;
