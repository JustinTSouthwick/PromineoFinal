import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhotoCredit from "./PhotoCredit";

export default function Footer() {
    return (
        <footer className="footer">
            <Container className='text-center'>
                <Row>
                    <Col>
                        <PhotoCredit />
                        Copyright &copy; Guitar Fans
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}