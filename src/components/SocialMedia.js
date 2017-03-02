import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Icon from 'react-fontawesome';

class SocialMedia extends Component {
    render() {
        return (
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
        );
    }
}

export default SocialMedia;
