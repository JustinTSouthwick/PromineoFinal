import React from "react";
import { Form, Button } from 'react-bootstrap';

export default function FeedbackForm() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Email address..." />
                <Form.Label>We won't share your email or send you junk.</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Feedback here..." rows={10}/>
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
    )
}