import { Container, Col } from "react-bootstrap";
import AnalysisChart from "../components/charts/AnalysisChart";
import StackedBar from "../components/charts/StackedBar";

const Perfomance = () => {
    return (
        <Container className="p-4">
            <h1 className="mb-5">Perfomance This Week</h1>
            <StackedBar />
            <h1 className="my-5">Perfomance Today</h1>
            <Col md={6} xs={12} className="offset-md-3">
            <AnalysisChart />
            </Col>
        </Container>
    );
}

export default Perfomance;
