import React, { Component } from 'react'
import "./MainContent.css";
import Post from '../Post/Post';
import Post_image from "../../images/post.jpg"
import uploadImage from "../../images/upload.png"
class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList:[]
        }
    }

    componentDidMount(){
        this.getPost();
    }

    getPost=()=>{
        let data=[
            {
                "postId": "1234",
                "username": "SVGFEGaussianBlurElement",
                "postImageURL": "https://i.pinimg.com/originals/15/48/1b/15481b7a29525fdca63725cc85646068.jpg",
                "timeStamp": "12345",
                "likes": "1001"
            },
            {
                "postId": "1234",
                "username": "SVGFEGaussianBlurElement",
                "postImageURL": "https://i.pinimg.com/originals/15/48/1b/15481b7a29525fdca63725cc85646068.jpg",
                "timeStamp": "12345",
                "likes": "1001"
            },
            {
                "postId": "1234",
                "username": "SVGFEGaussianBlurElement",
                "postImageURL": "https://i.pinimg.com/originals/15/48/1b/15481b7a29525fdca63725cc85646068.jpg",
                "timeStamp": "12345",
                "likes": "1001"
            }
        ];

        this.setState({postList: data});
    }

    render() {
        return (
            <div>
                <div className='MainContent_upload_container' style={{"textAlign":"center"}}>
                    <div className='MainContent_upload_text'>Upload a post</div>
                    <img src={uploadImage} className='MainContent_upload'/>
                </div>
                {
                    this.state.postList.map((item, index)=>(
                        <Post id={item.post} username={item.username} Post_image={item.postImageURL} likes={item.likes}/>
                    ))
                }
            </div>
        );
    }
}

export default MainContent;