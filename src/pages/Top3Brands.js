import { Container } from "react-bootstrap";
import Top3Table from "../components/Top3Table";
import DataAccess from "../components/DataAccess";
import Top3Carousel from "../components/Top3Carousel";
 


export default function Top3Brands() {
    return (
        <div>
            <Container className="text-center mt-4">
                <h2>TOP 3 BRANDS</h2>
                <h6>Updated monthly.</h6>
                <Top3Carousel />
                <Top3Table />        
            </Container>
        </div>
    )
}