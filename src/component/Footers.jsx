import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footers = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="6">
            <div className="fw-bold fs-4">
              CARIJOB<span className="text-danger">BENGKALIS</span>
            </div>
            <p className="fs-6 text-secondary">
              Website info lowongan kerja pertama di daerah Bengaklis
            </p>
          </Col>
          <Col lg="6 d-flex justify-content-lg-end">
            <div className="w-50">
              <h4 className="fw-bold">Hubungi Kami</h4>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="m-0">Nama</Form.Label>
                  <Form.Control type="text" placeholder="Example Name" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="m-0">Alamat Email</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="m-0">Pesan</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button className="bg-danger border-danger float-end">
                  Kirim Pesan
                </Button>
              </Form>
            </div>
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
