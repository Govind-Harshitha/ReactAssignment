import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CategoryHeader.css';
import * as FontAwesome from 'react-icons/lib/fa'

class CategoryHeader extends Component {
    render() {
        const category = this.props.categories;
        return (
            <div className="category-content row">
                <div className="heading">
                    <b>
                        <FontAwesome.FaServer />&nbsp; 
                        Main category</b>
                </div>
                <div className="category-content ">
                    {
                        category.map((category, i) =>

                            <div className="link-bar" >
                                <FontAwesome.FaServer />&nbsp;  
                                {category.category}
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default CategoryHeader;