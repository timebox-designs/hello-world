import React, {Component} from 'react';
import {Grid, Image} from 'react-bootstrap';

import subhead from '../img/subhead.png';

class Masthead extends Component {
    render() {
        return (
            <Grid className="subhead">
                <Image src={subhead} responsive/>
            </Grid>
        );
    }
}

export default Masthead;
