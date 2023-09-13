import { Carousel, Image } from "react-bootstrap";

const Carosels = (props) => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image src={props.img1} />
          <Carousel.Caption>
            <h3>Iklan 1 atau Informasi Job</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={props.img2} />
          <Carousel.Caption>
            <h3>Iklan 2 atau Informasi Job</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={props.img3} />
          <Carousel.Caption>
            <h3>Iklan 3 atau Informasi Job</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default Carosels;
