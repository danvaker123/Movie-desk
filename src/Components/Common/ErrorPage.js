import { Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container className="my-3">
      <Row>
        <Col className="text-center mt-3">
          <h4 className="w-100 text-muted">Look Like You're lost</h4>
          <h5 className="w-100 mt-2 text-muted">
            The Page You Are Looking For Is Not Available!
          </h5>
          <Link to="/">
            <Button className="btn btn-dark  mt-2 ml-2 p-2">Home Page</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
