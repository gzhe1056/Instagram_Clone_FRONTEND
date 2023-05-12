import React, { Component } from 'react'
import "./InfoSection.css";
import { Avatar } from '@mui/material';
import imageSrc from "../../images/profile_1.png"
class InfoSection extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div className='InfoSection_container'>
                <Avatar src={imageSrc} className='InfoSection_img'/>
                <div className='InfoSection_content'>
                    <div className='InfoSection_username'>User</div>
                    <div className='InfoSection_description'>Description</div>
                </div>
            </div>
        );
    }
}

export default InfoSection;