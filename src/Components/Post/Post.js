import React, { Component } from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';
import Post_image from "../../images/post.jpg";
import icon_favorite from "../../images/icon_favorite.svg";
import icon_comment from "../../images/icon_comment.svg";
import icon_share from "../../images/icon_share.svg";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList:[]
        }
    }

    componentDidMount(){
        this.getComments();
    }

    getComments=()=>{
        let data=[
            {
                "username":"Bob",
                "commentId":"1",
                "timeStamp":"1234",
                "description":"Comment 1"
            },
            {
                "username":"Bob",
                "commentId":"1",
                "timeStamp":"1234",
                "description":"Comment 1"
            }
            ,
            {
                "username":"Bob",
                "commentId":"1",
                "timeStamp":"1234",
                "description":"Comment 1"
            }
        ];

        this.setState({commentList: data});
    }

    render() {
        return (
            <div className="Post_container">
                <div className="Post_header">
                    <Avatar className="Post_img" src=""/>
                    <div className="Post_username">{this.props.username}</div>
                </div>
                <div>
                    <img src={this.props.Post_image} width={"615px"}/>
                </div>
                <div>
                    <div style={{"marginLeft":"10px"}}>
                        <img src={icon_favorite} className="Post_icon"/>
                        <img src={icon_comment} className="Post_icon"/>
                        <img src={icon_share} className="Post_icon"/>
                    </div>
                    <div style={{"fontWeight":"bold", "marginLeft":"20px"}}>
                        {this.props.likes} likes
                    </div>
                </div>
                <div>
                    {
                        this.state.commentList.map((item, index)=>(
                            <div className="Post_comment">{item.username}: {item.description}</div>
                        ))
                    }
                    
                    <input text="text" className="Post_commentbox" placeholder="Add a comment..."/>
                </div>
            </div>
        );
    }
}

export default Post;