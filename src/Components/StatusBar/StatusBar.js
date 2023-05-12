import React, { Component } from 'react'
import "./StatusBar.css";
import { Avatar } from '@mui/material';
import Status_img from "../../images/profile_1.png";
import uploadImage from "../../images/upload1.png"
class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusList: []
        }
    }
    componentDidMount(){
        this.getData();
    }
    getData=()=>{
        let data=[
            {
                "username":"test",
                "imageURL":"../../images/profile_1.png"
            },
            {
                "username":"test",
                "imageURL":"../../images/profile_1.png"
            },
            {
                "username":"test",
                "imageURL":"../../images/profile_1.png"
            },
            {
                "username":"test",
                "imageURL":"../../images/profile_1.png"
            },
            {
                "username":"test",
                "imageURL":"../../images/profile_1.png"
            },
            {
                "username":"test",
                "imageURL":"../../images/profile_1.png"
            },
            {
                "username":"test",
                "imageURL":"../../images/profile_1.png"
            },
            {
                "username":"test",
                "imageURL":"../../images/profile_1.png"
            },
            {
                "username":"test",
                "imageURL":"../../images/profile_1.png"
            }
        ]
        this.setState({statusList: data});
    }

    render() {
        return (
            <div>
                <div className="StatusBar_container">
                    <img className='StatusBar_upload' src={uploadImage} width="100px" height="100px"/>
                    {
                        this.state.statusList.map((item, index)=>(
                            <div className="status">
                                <Avatar className="StatusBar_people" src={Status_img} />
                                <div className="StatusBar_text">{item.username}</div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        );
    }
}

export default StatusBar;