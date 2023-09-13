import { useContext, useEffect } from "react";
import { Contex } from "../context/databaseContex";
import Navbars from "../component/Navbars";
import Carosels from "../component/Carosels";
import { Container, Row, Col } from "react-bootstrap";
import CardLoker from "../component/CardLoker";
import Footers from "../component/Footers";

const Homes = () => {
  const { dataAll } = useContext(Contex);

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
            {dataAll.map((item) => (
              <Col md="4">
                <CardLoker
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
