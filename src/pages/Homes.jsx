import { useContext, useEffect } from "react";
import { Contex } from "../context/databaseContex";
import Navbars from "../component/Navbars";
import Carosels from "../component/Carosels";
import { Container, Row, Col } from "react-bootstrap";
import CardLoker from "../component/CardLoker";
import Footers from "../component/Footers";
import { useNavigate } from "react-router-dom";

const Homes = () => {
  const { dataAll } = useContext(Contex);
  const Navigate = useNavigate(null);
  const handleCardOverview = (index) => {
    localStorage.setItem("lokerwhat", index);
    Navigate("/website-loker/overview");
  };

  return (
    <>
      <Navbars />
      <section className="py-5">
        <Container>
          <Carosels
            img1="https://via.placeholder.com/900x400"
            img2="https://via.placeholder.com/900x400"
            img3="https://via.placeholder.com/900x400"
          />
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col xs="12">
              <h3 className="fw-bold">Loker Terbaru</h3>
            </Col>
            {dataAll.map((item, index) => (
              <Col md="4">
                <CardLoker
                  onClick={() => handleCardOverview(index)}
                  img={item.data.img}
                  title={item.data.title}
                  company={item.data.company}
                  city={item.data.city}
                  date={item.data.datePost}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <footer className="py-3 border-top bg-secondary bg-opacity-25">
        <Footers />
      </footer>
    </>
  );
};
export default Homes;
