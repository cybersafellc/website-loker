import { useContext, useEffect, useState } from "react";
import { Contex } from "../context/databaseContex";
import Navbars from "../component/Navbars";
import { Button, Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OverviewLocker = () => {
  const { dataAll } = useContext(Contex);
  const [data, setData] = useState(null);
  const Navigate = useNavigate(null);

  useEffect(() => {
    setData(dataAll[localStorage.getItem("lokerwhat")]);
  }, [dataAll]);

  const HandlelamarSekarang = (p) => {
    window.location.href = `https://wa.me/62${p}`;
  };
  const handleClose = () => {
    Navigate(`/website-loker/${localStorage.getItem("fromParam")}`);
  };
  return (
    <>
      <Navbars />
      <section>
        <Container>
          <div>
            <div className="p-2 d-flex justify-content-between border-bottom">
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
              <p className="m-2 mt-4 fw-bold">Deskripsi Pekerjaan :</p>
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
        </Container>
      </section>
    </>
  );
};

export default OverviewLocker;
