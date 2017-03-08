import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

import mec from '../img/mec.jpg';

class MecPage extends Component {
    render() {
        let marginBottom = {marginBottom: "15px"};

        return (
            <Grid>
                <Row style={marginBottom}>
                    <Col sm={12}>
                        <h2>MEC</h2>

                        <blockquote className="blockquote">
                            <p className="font-italic">
                                A nature loving brand inspiring and leading its city dwelling members outdoors.
                            </p>
                        </blockquote>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} mdPush={6}>
                        <Image src={mec} className="img-margin-bottom" rounded responsive/>
                    </Col>

                    <Col md={6} mdPull={6}>
                        <section>
                            <h4>Billboard</h4>
                            <p>
                                Features a recognizable scene of community and connection, a group of friends at a bar
                                talking. The furniture and lights etc. are all formed out of natural elements and
                                instead of the inside of a bar, the scene is a beautiful outdoor landscape. The caption
                                reads: "Bring it outdoors" and the MEC logo is visible. Other versions: a family
                                reunion, a first date, all similarly formed from nature.
                            </p>
                        </section>

                        <section>
                            <h4>Radio</h4>
                            <p>
                                The first 20 seconds are ambient camping noises, a crackling fire, cicadas, maybe birds,
                                wind, water, rustling leaves. The goal is to make the listener feel momentarily
                                transported outdoors, and away from their everyday life. Finally, the narrator's voice
                                comes in: Narrator: "MEC…Bring it Outdoors"
                            </p>
                        </section>

                        <section>
                            <h4>Social Media</h4>
                            <p>
                                Similarily to the billboards it's about the community feeling outdoors. Online ads would
                                contain the billborad images, as well as 360 panorama video images, so that when
                                accessing these on Instagram or Facebook, users could feel like they were momentarily
                                connected to these outdoors scenarios. Video images could be shared by fans and
                                particpants, or fesature images of the Outdoor Nation Festival. Captions would detail
                                staff expertise, the online trade centre, and Outdoor Nation, highlighting MEC's work
                                towards accesibility. Each would link to the MEC website, and use #Outsiders.
                            </p>
                        </section>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default MecPage;
