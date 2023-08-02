import { Container } from "react-bootstrap";
import ContactTable from "../components/ContactTable";
import FeedbackForm from "../components/FeedbackForm";




export default function Contact() {
    return (
        <div>
            <Container className="text-center mt-4">
                <h2>Contact us</h2>
                <ContactTable />
                <h2>Leave us feedback</h2>
                <FeedbackForm />
            </Container>
        </div>
    )
}