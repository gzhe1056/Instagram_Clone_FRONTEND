import React, {Component} from "react";
import Grid from '@mui/material/Grid';
import './LoginPage.css';
import instagram_phone_image from '../../images/9364675fb26a.svg'
import instagram_logo from '../../images/instagram_logo.png'
import Facebook from '../../images/facebook_logo.png'
import Appstore from '../../images/appstore_logo.png'
import Playstore from '../../images/playstore_logo.png'
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }

    changeTo=() => {
        if(this.state.isLogin)
            this.setState({isLogin: false});
        else
            this.setState({isLogin: true});
    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="LoginPage_main">
                            <div>
                                <img src={instagram_phone_image} width="454px"/>
                            </div>
                            <div>
                                <div className="LoginPage_main_right">
                                    <img className="LoginPage_logo" src={instagram_logo} />
                                    <div className="LoginPage_signin">

                                        {
                                            this.state.isLogin ? <SignIn/> : <SignUp/>
                                        }

                                        <div className="login_OR_divder">
                                            <div className="login_divider"></div>
                                            <div className="login_OR">OR</div>
                                            <div className="login_divider"></div>
                                        </div>

                                        <div className="login_Fb">
                                            <img src={Facebook} width="15px" style={{"marginRight":"5px"}}/>
                                            Log in with Facebook
                                        </div>
                                        <div className="login_forgot">Forgot password?</div>
                                    </div>
                                </div>
                                <div className="LoginPage_login_registration">
                                    {
                                        this.state.isLogin ?
                                        <div className="LoginPage_signup">
                                            Don't have an account? <span onClick={this.changeTo} style={{"fontWeight":"bold", "color":"#0395f6"}}>Sign up</span>
                                        </div> : 
                                        <div className="LoginPage_sign_in">
                                            Have an account? <span onClick={this.changeTo} style={{"fontWeight":"bold", "color":"#0395f6"}}>Log in</span>
                                        </div>
                                    }

                                    
                                </div>

                                <div className="LoginPage_download_section">
                                    <div>
                                        Get the app
                                    </div>
                                    <div className="LoginPage_download_option">
                                        <img className="LoginPage_download_img" src={Appstore} width="136px"/>
                                        <img className="LoginPage_download_img" src={Playstore} width="136px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;