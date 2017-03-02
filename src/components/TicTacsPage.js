import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

import ticTacs from '../img/tic-tacs.jpg';
import bitmoji1 from '../img/bitmoji/1.jpg';
import bitmoji2 from '../img/bitmoji/2.jpg';
import bitmoji3 from '../img/bitmoji/3.jpg';

class TicTacsPage extends Component {
    render() {
        let marginBottom = {marginBottom: "15px"};

        return (
            <Grid>
                <Row style={marginBottom}>
                    <Col sm={12}>
                        <h2>Banana Splash Tic Tacs</h2>

                        <blockquote className="blockquote">
                            <p className="font-italic">
                                A playful, optimistic and engaging brand that creates little moments of fun.
                            </p>
                        </blockquote>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} mdPush={6} style={marginBottom}>
                        <Image src={ticTacs} rounded responsive/>
                    </Col>

                    <Col md={6} mdPull={6}>
                        <section>
                            <h4>Snapchat</h4>
                            <p>
                                A snapchat filter for a the limited edition launch, featuring a tropical theme, banana
                                tree and the ocean. Tinting the image so it’s golden and warm, and placing a flower on
                                the user's hair. There will also be a sound component, tropical music featuring the
                                sound of a tic tac bottle shaking like maracas. When the user opens their mouth, bananas
                                and Tic Tacs come pouring out.
                            </p>
                        </section>

                        <section>
                            <h4>Bitmoji</h4>
                            <p>
                                Bitmoji is very popular among the target demographic. Tic Tac could release a series of
                                Bitmoji stickers featuring the Banana Splash Tic Tac in a variety of usable images, with
                                captions that reflect the Bitmoji conversation aesthetic.
                            </p>
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} md={4} style={marginBottom}>
                        <Image src={bitmoji1} rounded responsive/>
                    </Col>
                    <Col sm={6} md={4} style={marginBottom}>
                        <Image src={bitmoji3} rounded responsive/>
                    </Col>
                    <Col sm={6} md={4} style={marginBottom}>
                        <Image src={bitmoji2} rounded responsive/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default TicTacsPage;
