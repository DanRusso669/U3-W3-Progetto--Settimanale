import { Container, Row } from "react-bootstrap";
import "./App.css";
import Aside from "./components/Aside";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavouritesPage from "./components/FavouritesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Aside />
            <Routes>
              <Route path="/" element={<MainSection />} />
              <Route path="/favourites" element={<FavouritesPage />} />
            </Routes>
          </Row>
          <Footer />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
