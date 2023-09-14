import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbars = (props) => {
  const Navigate = useNavigate(null);
  return (
    <>
      <Navbar
        expand="lg"
        className={`bg-body-tertiary shadow py-2 ${props.position}`}
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4">
            CARIJOB<span className="text-danger">BENGKALIS</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center gap-4">
              <Nav.Link
                href="#home"
                onClick={() => Navigate("/website-loker/")}
              >
                Beranda
              </Nav.Link>
              <Nav.Link
                href="#link"
                onClick={() => Navigate("/website-loker/loker")}
              >
                Loker
              </Nav.Link>
              <Nav.Link href="#link">Tentang Kami</Nav.Link>
              <Nav.Link href="#link">
                <Button className="d-flex align-items-center gap-2 bg-danger border-danger rounded-0">
                  Masuk/Daftar <i class="bx bxs-user fs-5"></i>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navbars;
