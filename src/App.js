import React, {Component} from 'react';
import {Grid, Row, Col, Thumbnail, Image} from 'react-bootstrap';
import Icon from 'react-fontawesome';
import AppNavbar from './AppNavbar';

import kindle from './img/kindle.jpg';
import mec from './img/mec.jpg';
import kotex from './img/kotex.jpg';
import ticTacs from './img/tic-tacs.jpg';
import zipCar1 from './img/zipcar/1.jpg';
import zipCar2 from './img/zipcar/2.jpg';
import zipCar3 from './img/zipcar/3.jpg';

import article from './img/sfu/article.jpg';
import tweet from './img/sfu/media-tweet.png';
import presidents from './img/sfu/presidents.jpg';
import redShirt from './img/sfu/red-shirt.jpg';
import slogan from './img/sfu/slogan.png';

import masthead from './img/masthead.png';
import sarah from './img/sarah.png';

class App extends Component {
    render() {
        let marginBottom = {marginBottom: "15px"};
        let darkenBorder = {borderColor: "#636c72"};

        return (
            <div>
                <AppNavbar/>

                <section className="purple-tint">
                    <Grid className="masthead">
                        <Image src={masthead} responsive/>
                    </Grid>
                </section>

                <section>
                    <Grid>
                        <h2>Mock Cases</h2>
                        <p className="lead">
                            An exercise in creativity and idea generation. I created a series of marketing cases by
                            selecting and
                            researching a brand, creating a strategy, some mock copy, and a quick sketch for various on
                            and offline
                            mediums.
                        </p>

                        <Row>
                            <Col md={6} lg={4}>
                                <Thumbnail className="img-top" src={kindle} alt="Kindle">
                                    <h4>Kindle</h4>
                                    <p>
                                        A friendly, bookish brand sparking passion and accessibility “for the love of
                                        reading”.
                                    </p>
                                    <a href="kindle.html">More</a>
                                </Thumbnail>
                            </Col>

                            <Col md={6} lg={4}>
                                <Thumbnail className="img-top" src={mec} alt="MEC">
                                    <h4>MEC</h4>
                                    <p>
                                        A nature loving brand inspiring and leading its city dwelling members outdoors.
                                    </p>
                                    <a href="mec.html">More</a>
                                </Thumbnail>
                            </Col>

                            <Col md={6} lg={4}>
                                <Thumbnail className="img-top" src={kotex} alt="Kotex">
                                    <h4>U by Kotex</h4>
                                    <p>
                                        A spunky, bold and colourful brand that tells it like it is.
                                    </p>
                                    <a href="kotex.html">More</a>
                                </Thumbnail>
                            </Col>

                            <Col md={6} lg={4}>
                                <Thumbnail className="img-top" src={ticTacs} alt="Tic Tacs">
                                    <h4>Tic Tacs</h4>
                                    <p>
                                        A playful, optimistic and engaging brand that creates little moments of fun.
                                    </p>
                                    <a href="tic-tacs.html">More</a>
                                </Thumbnail>
                            </Col>

                            <Col md={12} lg={8}>
                                <blockquote className="blockquote blockquote-reverse margin">
                                    <p>
                                        No one ever discovered anything new by colouring in the lines
                                    </p>
                                    <footer className="blockquote-footer">
                                        <cite>Thomas Vasquez</cite>
                                    </footer>
                                </blockquote>
                            </Col>
                        </Row>
                    </Grid>
                </section>

                <section className="color-section blue-tint">
                    <Grid>
                        <h2>First Place Winner</h2>
                        <p className="lead">
                            First place winner of the 2016 SMAck Down marketing case competition focusing on Zip Car’s
                            move into Calgary, and hosted by the SFU Student Marketing Association in partnership with
                            Red the Agency. After a thirteen hour work day we presented the following three marketing
                            strategy proposals to a panel of judges and executives to take the gold.
                        </p>

                        <Row>
                            <Col md={6} lg={4}>
                                <Thumbnail className="img-top" src={zipCar1}>
                                    <h5>No Sweat Maintenance</h5>
                                    <p>
                                        Highlighted the ease and low cost of maintenance and winter driving with Zip Car
                                        while focusing on Social Media and University advertising.
                                    </p>
                                </Thumbnail>
                            </Col>

                            <Col md={6} lg={4}>
                                <Thumbnail className="img-top" src={zipCar2}>
                                    <h5>Take Your Pick &amp; Drive in Style</h5>
                                    <p>
                                        Using the 'Prairie' identity, the stampede and the status symbol tied to luxury
                                        cars and pick-up trucks, this underlined the economic benefits of paying less,
                                        while still driving a nice car.
                                    </p>
                                </Thumbnail>
                            </Col>

                            <Col md={6} lg={4}>
                                <Thumbnail className="img-top" src={zipCar3}>
                                    <h5>Cars That Adjust To Your Lifestyle</h5>
                                    <p>
                                        Launched at Calgary Folk Music festival, with continuing advertising at
                                        Universities and malls, this strategy focused on the key 'Yuppie' demographic
                                        living the Zip Car lifestyle: shopping, attending events, and going out with
                                        friends.
                                    </p>
                                </Thumbnail>
                            </Col>
                        </Row>
                    </Grid>
                </section>

                <section>
                    <Grid>
                        <h2>#VolunteersofSFU</h2>
                        <p className="lead">
                            A successful and engaging student campaign I imagined, developed, and implemented
                            campus-wide for Simon Fraser University’s Career and Volunteer Services Department.
                        </p>

                        <Row>
                            <Col md={6}>
                                <Image src={redShirt} style={ marginBottom } rounded responsive/>

                                <p>
                                    #VolunteersofSFU is a new dynamic social media campaign, inspired by the wildly
                                    popular Humans of New York Facebook Page, which is devoted to providing recognition
                                    and appreciation to the fantastic and dedicated volunteers of Simon Fraser
                                    University (SFU). Whether students are volunteering on or off campus, for a short
                                    period of time or a long period we want to recognize their contribution, and share
                                    their story with others.
                                </p>

                                <p>
                                    The official launch of this project was featured on Facebook, Social Media, and The
                                    Peak Newspaper, in several Volunteer Events, and through a guerrilla ‘interruption’
                                    poster and sign campaign. All of this culminated in the launch event, which occurred
                                    May 17th and 18th on SFU Burnaby campus, and on SFU Surrey campus May 19th 2016.
                                </p>

                                <p>
                                    <a href="https://www.sfu.ca/volunteer/volunteersofsfu/">#VolunteersofSFU</a>
                                </p>
                            </Col>

                            <Col md={6}>
                                <Row>
                                    <Col lg={6} style={ marginBottom }>
                                        <Image src={slogan} rounded responsive/>
                                    </Col>

                                    <Col lg={6} style={ marginBottom }>
                                        <Image src={presidents} rounded responsive/>
                                    </Col>

                                    <Col sm={6} xsHidden>
                                        <Image src={article} rounded responsive/>
                                    </Col>

                                    <Col sm={6} xsHidden>
                                        <Image src={tweet} rounded responsive/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </section>

                <section className="puff-piece color-section green-hue">
                    <Grid>
                        <div className="puff-piece-image">
                            <Image src={sarah} circle responsive/>
                        </div>

                        <Row>
                            <Col sm={12}>
                                <blockquote className="blockquote blockquote-reverse" style={ darkenBorder }>
                                    <p>
                                        I am an insatiable coffee drinker and travel lover, who has fallen in love with the process of
                                        coming up with ideas. Writing, developing and creating are my life, extreme organization is just
                                        my fun quirk.
                                    </p>
                                    <footer className="blockquote-footer">
                                        <cite>Sarah Campbell</cite>
                                    </footer>
                                </blockquote>
                            </Col>
                        </Row>
                    </Grid>
                </section>

                <section className="color-section green-hue">
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <ul className="social-media list-inline text-center">
                                    <li className="list-inline-item">
                                        <a href="https://ca.linkedin.com/in/sarah-campbell-b9895081">
                                            <Icon name="linkedin" size="2x"/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <Icon name="snapchat" size="2x"/>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.instagram.com/sarah_soup/">
                                            <Icon name="instagram" size="2x"/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="mailto:sarahj.campb@gmail.com">
                                            <Icon name="envelope-o" size="2x"/>
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Grid>
                </section>

            </div>
        );
    }
}

export default App;
