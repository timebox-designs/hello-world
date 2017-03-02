import React, {Component} from 'react';
import {Grid, Image} from 'react-bootstrap';
import Subhead from './Subhead';
import SocialMedia from './SocialMedia';

import coffee from '../img/coffee-sm.png'

class PageLayout extends Component {
    render() {
        return (
            <div id="page-layout">
                <section className="blue-hue">
                    <Subhead/>
                </section>

                {this.props.children}

                <section className="puff-piece color-section blue-hue">
                    <Grid>
                        <div className="puff-piece-image">
                            <Image src={coffee} className="blue-hue" circle responsive/>
                        </div>
                    </Grid>
                </section>

                <section className="color-section blue-hue">
                    <SocialMedia/>
                </section>
            </div>
        );
    }
}

export default PageLayout;
