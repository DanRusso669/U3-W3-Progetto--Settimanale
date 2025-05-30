import { Container, Row } from "react-bootstrap";
import "./App.css";
import Aside from "./components/Aside";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Aside />
          <MainSection />
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default App;
