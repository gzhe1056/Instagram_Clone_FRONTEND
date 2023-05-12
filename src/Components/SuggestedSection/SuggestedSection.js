import React, { Component } from 'react'
import "./SuggestedSection.css";
import { Avatar } from '@mui/material';
import imageSrc from "../../images/profile_1.png"

class SuggestedSection extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div>
                <div className='SuggestedSection_container'>
                    <div className='SuggestedSection_header'>
                        <div>Suggested For You</div>
                    </div>
                    <div className='SuggestedSection_body'>
                        <div className='SuggestedSection_friends'>
                            <Avatar className='SuggestedSection_image' src={imageSrc}/>
                            <div className='SuggestedSection_username'>Friend 1</div>
                        </div>
                    </div>
                    <div className='SuggestedSection_body'>
                        <div className='SuggestedSection_friends'>
                            <Avatar className='SuggestedSection_image' src={imageSrc}/>
                            <div className='SuggestedSection_username'>Friend 1</div>
                        </div>
                    </div>
                    <div className='SuggestedSection_body'>
                        <div className='SuggestedSection_friends'>
                            <Avatar className='SuggestedSection_image' src={imageSrc}/>
                            <div className='SuggestedSection_username'>Friend 1</div>
                        </div>
                    </div>
                    <div className='SuggestedSection_body'>
                        <div className='SuggestedSection_friends'>
                            <Avatar className='SuggestedSection_image' src={imageSrc}/>
                            <div className='SuggestedSection_username'>Friend 1</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SuggestedSection;