import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SidebarCategories } from "./SidebarCategories";
import { MainBody } from "./MainBody";

export const Main = () => {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <SidebarCategories />
        </Col>
        <Col sm={8}>
          <MainBody />
        </Col>
      </Row>
    </Container>
  );
};
