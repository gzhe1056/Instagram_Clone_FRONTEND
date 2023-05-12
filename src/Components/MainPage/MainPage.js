import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import "./MainPage.css";
import StatusBar from '../StatusBar/StatusBar';
import MainContent from '../MainContent/MainContent';
import InfoSection from '../InfoSection/InfoSection';
import SuggestedSection from '../SuggestedSection/SuggestedSection';
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={2}>
                        
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <StatusBar/>
                            <MainContent/>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <InfoSection/>
                        <SuggestedSection/>
                    </Grid>
                    <Grid item xs={2}>
                        Hello
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default MainPage;