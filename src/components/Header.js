import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Header() {
    return (
        <header>
            <Navbar className='bg-secondary-subtle border-bottom'>
                <Container>
                    <Navbar.Brand href="/home">Guitar Fans</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/top3brands">Top 3 Brands</Nav.Link>
                        <Nav.Link href="/votepage">Vote Page</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}