import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './style.css'
function HorizontalWidget() {
    return (
        <Container className="bg-dark text-center">
            <Row className="justify-content-center">
                {['Success Stories', 'Intel & Ideas', "What's New(s)"].map((text, idx) => (
                    <Col xs={12} md={4} key={idx} className="nav-widget-container">
                        <Card className="bg-dark text-white border-0 ">
                            <Card.Body className='nav-widget-container'>
                                <div className="d-md-flex flex-md-column justify-content-sm-between d-flex align-items-center gap-sm-2 ">
                                    <div className='nav-widget-item-circle'/>
                                    <p className="fs-5 fw-bold">{text}</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            
        </Container>
    );
}

export default HorizontalWidget;
