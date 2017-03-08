import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

import kindle from '../img/kindle.jpg';

class KindlePage extends Component {
    render() {
        let marginBottom = {marginBottom: "15px"};

        return (
            <Grid>
                <Row style={marginBottom}>
                    <Col sm={12}>
                        <h2>Kindle</h2>

                        <blockquote className="blockquote">
                            <p className="font-italic">
                                A friendly, bookish brand sparking passion and accessibility "for the love of reading".
                            </p>
                        </blockquote>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} mdPush={6}>
                        <Image src={kindle} className="img-margin-bottom" rounded responsive/>
                    </Col>

                    <Col md={6} mdPull={6}>
                        <section>
                            <h4>Billboard</h4>
                            <p>
                                The kindle is off-centre in a brown leather case, making it look like an old book
                                jacket. The screen is dark except for the silhouette of a large key hole, it looks as
                                though the viewer could peer through to another world. The keyhole pours out light,
                                entwined with the light are sentences of well-known popular books. The caption reads:
                                "Your key to the world’s biggest bookstore".
                            </p>
                        </section>

                        <section>
                            <h4>Radio</h4>
                            <p>
                                The radio spot would feature several different people, a younger child, a woman, an
                                older man, each voice reads out a recognizable sentence from a well known book. The
                                final voice comes on at the end, and says: "Kindle, your key to the world's biggest
                                bookstore… what are you reading?
                            </p>
                        </section>

                        <section>
                            <h4>Social Media</h4>
                            <p>
                                Connect with Tumblr, blogs and writer groups online, join in on conversations. Kindle
                                should reach out and partner with big name book lovers, ie. Buzz Feed Books, or the top
                                ten winners of the annual Book Lover Blogs contest.​ A popular book blogger would make a
                                good online spokesperson and reviewer. Blogs would also make a good launching pad for
                                online ads.
                            </p>
                            <p>
                                Launch "Kindle's Book Club" on social media. Using "World's biggest book store" as its
                                slogan, it could have a picked-by section on its reading list, similar to a physical
                                bookstore. The list features a shared "Book of the Month", chosen by a well-known
                                author, blogger or literary critic. For a month, the book would be prominent in the
                                store and at the top of the Book Club reader list, with info about who recommended it.
                                At the end of the month, Kindle would curate an online book club discussion, using the
                                book's title as a hashtag.
                            </p>
                        </section>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default KindlePage;
