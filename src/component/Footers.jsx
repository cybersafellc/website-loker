import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import ImageSucces from "../assets/img/success.gif";

const Footers = () => {
  const [statusSent, setStatusSent] = useState([]);
  const handleFetchSentEmail = (e) => {
    e.preventDefault();
    axios
      .post(`https://formspree.io/f/mdordeae`, {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      })
      .then((ress) => {
        setStatusSent(ress.status);
      })
      .catch((err) => {
        setStatusSent(err.response.status);
      });
  };
  const [tampilkan, setTampilkan] = useState(true);
  useEffect(() => {
    if (statusSent == "200") {
      setTampilkan(false);
    }
  }, [statusSent]);
  return (
    <>
      <Container>
        <Row className="g-4">
          <Col lg="6">
            <div className="fw-bold fs-4">
              CARIJOB<span className="text-danger">BENGKALIS</span>
            </div>
            <p className="fs-6 text-secondary">
              Website info lowongan kerja pertama di daerah Bengaklis
            </p>
          </Col>
          <Col lg="6 d-flex justify-content-lg-end">
            {tampilkan || (
              <div className="d-flex justify-content-center align-items-center py-5">
                <Image className="w-25 rounded-circle" src={ImageSucces} />
              </div>
            )}
            {tampilkan && (
              <div className="w-100">
                <h4 className="fw-bold">Hubungi Kami</h4>
                <Form onSubmit={handleFetchSentEmail}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="m-0">Nama</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Example Name"
                      name="name"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="m-0">Alamat Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      name="email"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="m-0">Pesan</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" />
                  </Form.Group>
                  <Button
                    className="bg-danger border-danger float-end"
                    type="submit"
                  >
                    Kirim Pesan
                  </Button>
                </Form>
              </div>
            )}
          </Col>
          <Col xs="12 ">
            <hr className="bg-dark text-dark" />
            <div className="text-center">
              <span className="text-secondary">
                ©2023 carijobbengkalis.com. Codex By{" "}
                <span className="text-primary">Rusnanda Purnama</span>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Footers;
