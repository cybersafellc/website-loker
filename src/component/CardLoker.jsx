import { Card, Image } from "react-bootstrap";

const CardLoker = (props) => {
  return (
    <>
      <Card
        className="p-4 border-5 border-end-0 border-top-0 border-bottom-0 shadow border-danger card-loker rounded-4"
        onClick={props.onClick}
      >
        <Card.Body className="p-0 d-flex flex-column justify-content-between">
          <div className="img-wrapper w-25">
            <Image className="w-100" src={props.img} />
          </div>
          <div className="wraper-underline">
            <a className="Name-loker m-0">{props.title}</a>
            <p className="m-0 fw-light">{props.company}</p>
          </div>
          <p className="fw-bold m-0 mt-3">{props.city}</p>
          <p className="text-secondary m-0">{props.date}</p>
        </Card.Body>
      </Card>
    </>
  );
};
export default CardLoker;
