import CardLoker from "../component/CardLoker";
import Navbars from "../component/Navbars";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Contex } from "../context/databaseContex";
import { useNavigate } from "react-router-dom";
import Footers from "../component/Footers";

const Loker = () => {
  const { dataAll } = useContext(Contex);
  const [data, Setdata] = useState(null);
  const [TampilkanData, setTampilkanData] = useState(false);
  const Navigate = useNavigate(null);
  const handleCardClick = (index) => {
    Setdata(dataAll[index]);
    if (window.innerWidth > 992) {
      setTampilkanData(true);
    } else {
      localStorage.setItem("fromParam", "loker");
      localStorage.setItem("lokerwhat", index);
      Navigate("/website-loker/overview");
    }
  };
  const handleClose = () => {
    setTampilkanData(false);
  };
  const HandlelamarSekarang = (p) => {
    window.location.href = `https://wa.me/62${p}`;
  };
  return (
    <>
      <Navbars position="position-fixed w-100 z-index-1" />
      <section className="pb-5 page-loker bg-whitesmoke">
        <Container>
          <Row className="g-3">
            <Col lg="5" md="10">
              <Row className="g-3">
                {dataAll.map((item, index) => (
                  <Col xs="12" key={(index += 1)}>
                    <CardLoker
                      onClick={() => handleCardClick((index -= 1))}
                      img={item.data.img}
                      title={item.data.title}
                      company={item.data.company}
                      city={item.data.city}
                      date={item.data.datePost}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md="7">
              <div className="wrapper-view-card">
                <div className="card-view-loker">
                  {TampilkanData || (
                    <div className="d-flex justify-content-center align-items-center h-100 select-loker-text">
                      <p className="fs-4 text-secondary">Pilih Loker Terbaru</p>
                    </div>
                  )}
                  {TampilkanData && (
                    <div>
                      <div className="p-4 d-flex justify-content-between border-bottom">
                        <Button
                          className="rounded-0 bg-danger border-danger"
                          onClick={() => HandlelamarSekarang(data?.data?.wa)}
                        >
                          Lamar Sekarang
                        </Button>

                        <Button
                          className="p-1 d-flex justify-content-center-align-items-center bg-white border-0 text-danger "
                          onClick={handleClose}
                        >
                          <i class="bx bx-x fs-1"></i>
                        </Button>
                      </div>
                      <div className="content-wrapper p-4">
                        <Image
                          className="w-25 border p-3 rounded-4 shadow"
                          src={data?.data?.img}
                        />
                        <p className="m-2 mt-4">{data?.data?.title}</p>
                        <p className="m-2">{data?.data?.company}</p>
                        <p className="m-2">{data?.data?.city}</p>
                        <p className="m-2">{data?.data?.datePost}</p>
                        <p className="m-2 mt-4 fw-bold">
                          Deskripsi Pekerjaan :
                        </p>
                        <ul>
                          {data?.data?.detailPekerjaan?.map((item) => (
                            <li>{item}</li>
                          ))}
                        </ul>
                        <p className="m-2 mt-4 fw-bold">Persyaratan :</p>
                        <ul>
                          {data?.data?.persyaratan?.map((item) => (
                            <li>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Loker;
