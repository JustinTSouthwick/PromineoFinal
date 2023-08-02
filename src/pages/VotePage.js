import { Container } from "react-bootstrap";
import DataAccess from "../components/DataAccess";
 


export default function VotePage() {
    return (
        <div>
            <Container className="text-center mt-4">
                <h2 className="mt-4">Vote for your favorite brand below.</h2>
                <DataAccess />          
            </Container>
        </div>
    )
}