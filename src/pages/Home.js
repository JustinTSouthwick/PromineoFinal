import { Container } from "react-bootstrap";
import { Link } from 'react-bootstrap'; 


export default function Home() {
    return (
        <div>
            <Container className="text-center mt-4">
                <h2>Welcome to Guitar Fans!</h2>
                <p>A place to see top picks, vote for yours, and mingle with other guitar fans.</p>
                <p></p>
            </Container>
        </div>
    )
}