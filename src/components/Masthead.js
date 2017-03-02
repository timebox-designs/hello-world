import React, {Component} from 'react';
import {Grid, Image} from 'react-bootstrap';

import masthead from '../img/masthead.png';

class Masthead extends Component {
    render() {
        return (
            <Grid className="masthead">
                <Image src={masthead} responsive/>
            </Grid>
        );
    }
}

export default Masthead;
