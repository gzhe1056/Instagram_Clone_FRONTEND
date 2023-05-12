import React, { Component } from 'react';
import "./Navbar.css";
import Grid from '@mui/material/Grid';
import instagram_logo from "../../images/instagram_logo.png";
import icon_home from "../../images/icon_home.svg";
import icon_message from "../../images/icon_message.svg";
import icon_find from "../../images/icon_find.svg";
import icon_favorite from "../../images/icon_favorite.svg";
import profile_1 from "../../images/profile_1.png";
import Avatar from '@mui/material/Avatar';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div className="Navbar_content">
                <Grid container>
                    <Grid item xs={2}>
                        
                    </Grid>
                    <Grid item xs={3}>
                        <img className="Navbar_logo" src={instagram_logo} width="105px"/>
                    </Grid>
                    <Grid item xs={3}>
                        <input className="Navbar_searchbar" text="text" placeholder="Search"/>
                    </Grid>
                    <Grid item xs={3} style={{"display":"flex"}}>
                        <img className="Navbar_img" src={icon_home} width="25px"/>
                        <img className="Navbar_img" src={icon_message} width="25px"/>
                        <img className="Navbar_img" src={icon_find} width="25px"/>
                        <img className="Navbar_img" src={icon_favorite} width="25px"/>
                        <Avatar className="Navbar_img" src={profile_1} style={{"maxWidth":"25px", "maxHeight":"25px"}}/>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
        );
    }
}

export default Navbar;